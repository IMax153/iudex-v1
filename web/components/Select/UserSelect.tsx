import React from 'react';
import { Field, FieldProps } from 'formik';
import { Dimmer, Dropdown, Loader } from 'semantic-ui-react';
import { Position, UsersComponent, UserOrderByInput } from '../../generated/graphql';

interface UserSelectProps {
  name: string;
  position: Position.Resident | Position.Pharmacist;
}

export const UserSelect: React.FC<UserSelectProps> = ({ name, position }) => {
  return (
    <UsersComponent variables={{ where: { position }, orderBy: UserOrderByInput.LastName_Asc }}>
      {({ data, loading, error }) => {
        if (error) return <div>Error! {error.message}</div>;
        if (loading || !data || !data.users) {
          return (
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
          );
        }

        const options = data.users.map(user => {
          return { key: user.id, value: user.id, text: user.fullName };
        });

        return (
          <Field
            name={name}
            render={({ field, form }: FieldProps) => (
              <Dropdown
                clearable
                fluid
                search
                selection
                placeholder="Select User"
                onChange={(_, { value }) => form.setFieldValue(field.name, value)}
                onBlur={() => form.setFieldTouched(field.name)}
                error={Boolean(form.touched[field.name] && form.errors[field.name])}
                options={options}
              />
            )}
          />
        );
      }}
    </UsersComponent>
  );
};
