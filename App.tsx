import React, { useState } from 'react';
import { View } from 'react-native';

import RegistrationComponent from './src/component/regis/RegistrationComponent';
import UsersListComponent from './src/component/regis/UsersListComponent';

const App: React.FC = () => {
  const [users, setUsers] = useState<{ name: string; username: string; email: string; address: string; phone: string; }[]>([]);

  const handleRegister = (name: string, username: string, email: string, address: string, phoneNumber: string) => {
    setUsers((prevUsers) => [...prevUsers, { name, username, email, address, phone: phoneNumber }]);
  };

  return (
    <View>
      <RegistrationComponent onRegister={handleRegister} />
      <UsersListComponent users={users} />
    </View>
  );
};

export default App;