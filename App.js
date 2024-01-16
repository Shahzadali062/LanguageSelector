import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation/StackNavigation';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </I18nextProvider>
  )
}

export default App;




// App.js
// import React from 'react';
// import ExampleComponent from './src/components/ExampleComponent/ExampleComponent';
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';

// const App = () => {
//   return (
//     <I18nextProvider i18n={i18n}>
//       <ExampleComponent />
//     </I18nextProvider>
//   );
// };

// export default App;