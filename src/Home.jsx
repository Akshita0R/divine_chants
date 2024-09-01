import React from 'react';

import AddGodForm from './AddGodForm';
import AddHistoricPoetForm from './AddHistoricPoetForm';
import AddLanguageForm from './AddLanguageForm';
import AddLiteratureTypeForm from './AddLiteratureTypeForm';
import AddPersonForm from './AddPersonForm';


function Home() {
  return (
    <div className="App">
      <center>
        <h1>Forms Page</h1>
      </center>
      <AddGodForm />
      <AddHistoricPoetForm />
      <AddLanguageForm />
      <AddLiteratureTypeForm />
      <AddPersonForm /> {/* Add the TabsPage component */}
    </div>
  );
}

export default Home;
