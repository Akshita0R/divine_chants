import React, { useState } from 'react';
import SongForm from './SongForm';
import AddGodForm from './AddGodForm';
import AddHistoricPoetForm from './AddHistoricPoetForm';
import AddLanguageForm from './AddLanguageForm';
import AddLiteratureTypeForm from './AddLiteratureTypeForm';
import AddPersonForm from './AddPersonForm';
import './SongForm.css';
// Import the CSS file

function Tabs() {
  const [activeTab, setActiveTab] = useState('song-form');

  const renderForm = () => {
    switch (activeTab) {
      case 'song-form':
        return <SongForm />;
      case 'god-form':
        return <AddGodForm />;
      case 'historic-poet-form':
        return <AddHistoricPoetForm />;
      case 'language-form':
        return <AddLanguageForm />;
      case 'literature-type-form':
        return <AddLiteratureTypeForm />;
      case 'person-form':
        return <AddPersonForm />;
      default:
        return <SongForm />;
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button 
          className={activeTab === 'song-form' ? 'active' : ''} 
          onClick={() => setActiveTab('song-form')}
        >
          Song Form
        </button>
        <button 
          className={activeTab === 'god-form' ? 'active' : ''} 
          onClick={() => setActiveTab('god-form')}
        >
          God
        </button>
        <button 
          className={activeTab === 'historic-poet-form' ? 'active' : ''} 
          onClick={() => setActiveTab('historic-poet-form')}
        >
          Historic Poet
        </button>
        <button 
          className={activeTab === 'language-form' ? 'active' : ''} 
          onClick={() => setActiveTab('language-form')}
        >
          Language
        </button>
        <button 
          className={activeTab === 'literature-type-form' ? 'active' : ''} 
          onClick={() => setActiveTab('literature-type-form')}
        >
          Literature Type
        </button>
        <button 
          className={activeTab === 'person-form' ? 'active' : ''} 
          onClick={() => setActiveTab('person-form')}
        >
          Person
        </button>
      </div>
      <div className="form-container">
        {renderForm()}
      </div>
    </div>
  );
}

export default Tabs;
