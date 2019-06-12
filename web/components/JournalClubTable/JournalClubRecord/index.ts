import { JournalClub, User, CoreCompetency, OverallCompetency } from '../../../generated/graphql';
import { ObjectUtilities } from '../../../lib/common';
import { formatCompetency } from '../../../lib/utils';
import { Cell, Record } from '../../ExportToExcel';

export class JournalClubRecord extends Record {
  public constructor(data: JournalClub) {
    super();
    this.createRecord(data);
  }

  private createRecord(data: JournalClub) {
    const rawRecordData = this.getRawData(data);
    this.createCells(rawRecordData);
  }

  private getRawData(data: JournalClub) {
    const dataWithoutTypename = this.removeProperty(data, '__typename' as any);

    const values = Object.values<string | User | CoreCompetency | OverallCompetency>(
      dataWithoutTypename,
    );

    const valueList = values.reduce(
      (acc, val) => {
        return typeof val === 'object'
          ? acc.concat(this.extractNestedObjectData(val))
          : acc.concat(val);
      },
      [] as (string | null | undefined)[],
    );

    return this.formatDates(valueList);
  }

  private createCells(values: any[]) {
    values.map(value => this.addCell(new Cell(value)));
  }

  private removeProperty(data: JournalClub, prop: keyof JournalClub) {
    return ObjectUtilities.omit(data, prop);
  }

  private extractNestedObjectData(data: Partial<User> | CoreCompetency | OverallCompetency) {
    if (Object.prototype.hasOwnProperty.call(data, 'fullName')) {
      return this.extractUserData(data);
    }
    if (Object.prototype.hasOwnProperty.call(data, 'competency')) {
      return this.extractCompetencyData(data as CoreCompetency | OverallCompetency);
    }
  }

  private extractUserData(data: Partial<User>) {
    return data.fullName;
  }

  private extractCompetencyData(data: CoreCompetency | OverallCompetency) {
    return [formatCompetency(data.competency), data.comment];
  }

  private formatDates(arr: any[]) {
    // test if date string is in valid ISO 8601 format
    const dateRegex = new RegExp(
      /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/,
    );

    return arr.map(item => (dateRegex.test(item) ? new Date(item).toLocaleDateString() : item));
  }
}
