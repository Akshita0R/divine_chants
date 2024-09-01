import React, { useState } from 'react';
import Select from 'react-select';


const SongForm = () => {
  const [formData, setFormData] = useState({
    songTitle: '',
    thumbnail: null,
    writerName: [],
    composerName: [],
    relatedGod: [],
    originalLanguage: [],
    literatureType: [],
    artistName: [],
    length: '',
    releaseDate: '',
    lyrics: {
      english: '',
      hindi: '',
      spanish: '',
      french: '',
      german: '',
    },
    meaning: {
      english: '',
      hindi: '',
      spanish: '',
      french: '',
      german: ''
    }
    
  });

  // Dummy data for the dropdowns
   const [writerOptions, setWriterOptions] = useState([
    { value: 'writer1', label: 'Writer 1' },
    { value: 'writer2', label: 'Writer 2' },
    { value: 'others', label: 'Others' },
  ]);
  

  const [composerOptions, setComposerOptions] = useState([
    { value: 'composer1', label: 'Composer 1' },
    { value: 'composer2', label: 'Composer 2' },
    { value: 'others', label: 'Others' },
  ]);

  const [godOptions, setGodOptions] = useState([
    { value: 'god1', label: 'God 1' },
    { value: 'god2', label: 'God 2' },
    { value: 'others', label: 'Others' },
  ]);


  const [languageOptions, setLanguageOptions] = useState([
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'others', label: 'Others' },
  ]);

  const [literatureTypeOptions, setLiteratureTypeOptions] = useState([
    { value: 'poetry', label: 'Poetry' },
    { value: 'prose', label: 'Prose' },
    { value: 'others', label: 'Others' },
  ]);

  const [artistOptions, setArtistOptions] = useState([
    { value: 'artist1', label: 'Artist 1' },
    { value: 'artist2', label: 'Artist 2' },
    { value: 'others', label: 'Others' },
  ]);


  const [showAddNewWriter, setShowAddNewWriter] = useState(false);
  const [newWriterName, setNewWriterName] = useState('');
  const [showAddNewComposer, setShowAddNewComposer] = useState(false);
  const [newComposerName, setNewComposerName] = useState('');
  const [showAddNewGod, setShowAddNewGod] = useState(false);
  const [newGodName, setNewGodName] = useState('');
  const [showAddNewLanguage, setShowAddNewLanguage] = useState(false);
  const [newLanguageName, setNewLanguageName] = useState('');
  const [showAddNewLiteratureType, setShowAddNewLiteratureType] = useState(false);
  const [newLiteratureTypeName, setNewLiteratureTypeName] = useState('');
  const [showAddNewArtist, setShowAddNewArtist] = useState(false);
  const [newArtistName, setNewArtistName] = useState('');





  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      thumbnail: e.target.files[0],
    });
  };

  const handleMultiSelectChange = (selectedOptions) => {
    const isOthersSelected = selectedOptions.some(
      (option) => option.value === 'others'
    );

    setFormData({ ...formData, writerName: selectedOptions });

    if (isOthersSelected) {
      setShowAddNew(true);
    } else {
      setShowAddNew(false);
    }
  };

  // Handle new writer name addition
  const handleAddNewWriter = () => {
    if (newWriterName.trim() === '') return;

    const newOption = { value: newWriterName.toLowerCase(), label: newWriterName };

    // Update writer options list and select the new option
    setWriterOptions((prevOptions) => [
      ...prevOptions.filter((option) => option.value !== 'others'),
      newOption,
      { value: 'others', label: 'Others' }
    ]);

    // Select the newly added option
    setFormData({ ...formData, writerName: newOption });

    // Clear input and hide add new section
    setNewWriterName('');
    setShowAddNewWriter(false);
  };

  const handleWriterSelectChange = (selectedOption) => {
    if (selectedOption.value === 'others') {
      setShowAddNewWriter(true);
    } else {
      setShowAddNewWriter(false);
      setFormData({ ...formData, writerName: selectedOption });
    }
  };

  
  
   // Handle single select change for composer
   const handleComposerSelectChange = (selectedOption) => {
    if (selectedOption.value === 'others') {
      setShowAddNewComposer(true);
    } else {
      setShowAddNewComposer(false);
      setFormData({ ...formData, composerName: selectedOption });
    }
  };

  // Handle new composer name addition
  const handleAddNewComposer = () => {
    if (newComposerName.trim() === '') return;

    const newOption = { value: newComposerName.toLowerCase(), label: newComposerName };

    // Update composer options list and select the new option
    setComposerOptions((prevOptions) => [
      ...prevOptions.filter((option) => option.value !== 'others'),
      newOption,
      { value: 'others', label: 'Others' }
    ]);

    // Select the newly added option
    setFormData({ ...formData, composerName: newOption });

    // Clear input and hide add new section
    setNewComposerName('');
    setShowAddNewComposer(false);
  }; 


   // Handle select change for Related God
   const handleGodSelectChange = (selectedOption) => {
    if (selectedOption.value === 'others') {
      setShowAddNewGod(true);
    } else {
      setShowAddNewGod(false);
      setFormData({ ...formData, relatedGod: selectedOption });
    }
  };


   // Handle new Related God addition
   const handleAddNewGod = () => {
    if (newGodName.trim() === '') return;

    const newOption = { value: newGodName.toLowerCase(), label: newGodName };

    // Update god options and select the new option
    setGodOptions((prevOptions) => [
      ...prevOptions.filter((option) => option.value !== 'others'),
      newOption,
      { value: 'others', label: 'Others' },
    ]);

    setFormData({ ...formData, relatedGod: newOption });

    setNewGodName('');
    setShowAddNewGod(false);
  };

  // Handle select change for Original Language
  const handleLanguageSelectChange = (selectedOption) => {
    if (selectedOption.value === 'others') {
      setShowAddNewLanguage(true);
    } else {
      setShowAddNewLanguage(false);
      setFormData({ ...formData, originalLanguage: selectedOption });
    }
  };

  // Handle new Original Language addition
  const handleAddNewLanguage = () => {
    if (newLanguageName.trim() === '') return;

    const newOption = { value: newLanguageName.toLowerCase(), label: newLanguageName };

    setLanguageOptions((prevOptions) => [
      ...prevOptions.filter((option) => option.value !== 'others'),
      newOption,
      { value: 'others', label: 'Others' },
    ]);

    setFormData({ ...formData, originalLanguage: newOption });

    setNewLanguageName('');
    setShowAddNewLanguage(false);
  };

   // Handle select change for Literature Type
   const handleLiteratureTypeSelectChange = (selectedOption) => {
    if (selectedOption.value === 'others') {
      setShowAddNewLiteratureType(true);
    } else {
      setShowAddNewLiteratureType(false);
      setFormData({ ...formData, literatureType: selectedOption });
    }
  };
   
    // Handle new Literature Type addition
  const handleAddNewLiteratureType = () => {
    if (newLiteratureTypeName.trim() === '') return;

    const newOption = { value: newLiteratureTypeName.toLowerCase(), label: newLiteratureTypeName };

    setLiteratureTypeOptions((prevOptions) => [
      ...prevOptions.filter((option) => option.value !== 'others'),
      newOption,
      { value: 'others', label: 'Others' },
    ]);

    setFormData({ ...formData, literatureType: newOption });

    setNewLiteratureTypeName('');
    setShowAddNewLiteratureType(false);
  };


  // Handle select change for Artist Name
  const handleArtistSelectChange = (selectedOption) => {
    if (selectedOption.value === 'others') {
      setShowAddNewArtist(true);
    } else {
      setShowAddNewArtist(false);
      setFormData({ ...formData, artistName: selectedOption });
    }
  };

  // Handle new Artist addition
  const handleAddNewArtist = () => {
    if (newArtistName.trim() === '') return;

    const newOption = { value: newArtistName.toLowerCase(), label: newArtistName };

    setArtistOptions((prevOptions) => [
      ...prevOptions.filter((option) => option.value !== 'others'),
      newOption,
      { value: 'others', label: 'Others' },
    ]);

    setFormData({ ...formData, artistName: newOption });

    setNewArtistName('');
    setShowAddNewArtist(false);
  };




  const handleLyricsTabClick = (language) => {
    setFormData((prevState) => ({
      ...prevState,
      activeLyricsTab: language,
    }));
  };

  const handleMeaningTabClick = (language) => {
    setFormData((prevState) => ({
      ...prevState,
      activeMeaningTab: language,
    }));
  };

  const handleLyricsChange = (event) => {
    const { value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      lyrics: {
        ...prevState.lyrics,
        [prevState.activeLyricsTab]: value,
      },
    }));
  };

  const handleMeaningChange = (event) => {
    const { value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      meaning: {
        ...prevState.meaning,
        [prevState.activeMeaningTab]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
     <div>
     <label>
        Song Title:<span class="required">*</span>
      </label>
      <input type="text" name="songTitle" value={formData.songTitle} onChange={handleChange} />
      </div>
      <div>
        <label>Writer Name:</label>
        <Select
          name="writerName"
          options={writerOptions}
          className="basic-single-select"
          classNamePrefix="select"
          value={formData.writerName}
          onChange={handleWriterSelectChange}
          isSearchable
        />
        {showAddNewWriter && (
          <div className="add-new-writer">
            <p>Want to add a new writer name?</p>
            <input
              type="text"
              value={newWriterName}
              onChange={(e) => setNewWriterName(e.target.value)}
              placeholder="Enter writer name"
            />
            <button className="add-button" onClick={handleAddNewArtist}>Add</button>

          </div>
        )}
      </div>
    
    <div>
        <label>Composer Name:</label>
        <Select
          name="composerName"
          options={composerOptions}
          className="basic-single-select"
          classNamePrefix="select"
          value={formData.composerName}
          onChange={handleComposerSelectChange}
          isSearchable
        />
        {showAddNewComposer && (
          <div className="add-new-composer">
            <p>Want to add a new composer name?</p>
            <input
              type="text"
              value={newComposerName}
              onChange={(e) => setNewComposerName(e.target.value)}
              placeholder="Enter composer name"
            />
            <button className="add-button" onClick={handleAddNewArtist}>Add</button>

          </div>
        )}
      </div>
      <div>
        <label>Related God:</label>
        <Select
          name="relatedGod"
          options={godOptions}
          className="basic-single-select"
          classNamePrefix="select"
          value={formData.relatedGod}
          onChange={handleGodSelectChange}
          isSearchable
        />
        {showAddNewGod && (
          <div className="add-new-god">
            <p>Want to add a new god name?</p>
            <input
              type="text"
              value={newGodName}
              onChange={(e) => setNewGodName(e.target.value)}
              placeholder="Enter god name"
            />
            <button className="add-button" onClick={handleAddNewArtist}>Add</button>

          </div>
        )}
      </div>
      <div>
        <label>Original Language:</label>
        <Select
          name="originalLanguage"
          options={languageOptions}
          className="basic-single-select"
          classNamePrefix="select"
          value={formData.originalLanguage}
          onChange={handleLanguageSelectChange}
          isSearchable
        />
        {showAddNewLanguage && (
          <div className="add-new-language">
            <p>Want to add a new language?</p>
            <input
              type="text"
              value={newLanguageName}
              onChange={(e) => setNewLanguageName(e.target.value)}
              placeholder="Enter language name"
            />
            <button className="add-button" onClick={handleAddNewArtist}>Add</button>

          </div>
        )}
      </div>
      <div>
        <label>Literature Type:</label>
        <Select
          name="literatureType"
          options={literatureTypeOptions}
          className="basic-single-select"
          classNamePrefix="select"
          value={formData.literatureType}
          onChange={handleLiteratureTypeSelectChange}
          isSearchable
        />
        {showAddNewLiteratureType && (
          <div className="add-new-literature-type">
            <p>Want to add a new literature type?</p>
            <input
              type="text"
              value={newLiteratureTypeName}
              onChange={(e) => setNewLiteratureTypeName(e.target.value)}
              placeholder="Enter literature type"
            />
            <button className="add-button" onClick={handleAddNewArtist}>Add</button>

          </div>
        )}
      </div>
      <div>
        <label>Artist Name:</label>
        <Select
          name="artistName"
          options={artistOptions}
          className="basic-single-select"
          classNamePrefix="select"
          value={formData.artistName}
          onChange={handleArtistSelectChange}
          isSearchable
        />
        {showAddNewArtist && (
          <div className="add-new-artist">
            <p>Want to add a new artist name?</p>
            <input
              type="text"
              value={newArtistName}
              onChange={(e) => setNewArtistName(e.target.value)}
              placeholder="Enter artist name"
            /><button className="add-button" onClick={handleAddNewArtist}>Add</button>

            
          </div>
        )}
      </div>
      {/* Language Tabs Section */}
      <div>
      <div>
  Lyrics
  <div className="tabs">
    <button type="button" className={`tab-button ${formData.activeLyricsTab === 'english' ? 'active' : ''}`} onClick={() => handleLyricsTabClick('english')}>English</button>
    <button type="button" className={`tab-button ${formData.activeLyricsTab === 'hindi' ? 'active' : ''}`} onClick={() => handleLyricsTabClick('hindi')}>Hindi</button>
    <button type="button" className={`tab-button ${formData.activeLyricsTab === 'spanish' ? 'active' : ''}`} onClick={() => handleLyricsTabClick('spanish')}>Spanish</button>
    <button type="button" className={`tab-button ${formData.activeLyricsTab === 'french' ? 'active' : ''}`} onClick={() => handleLyricsTabClick('french')}>French</button>
    <button type="button" className={`tab-button ${formData.activeLyricsTab === 'german' ? 'active' : ''}`} onClick={() => handleLyricsTabClick('german')}>German</button>
  </div>
  <div className="tab-content">
    <textarea placeholder={`Enter lyrics in ${formData.activeLyricsTab}`} value={formData.lyrics[formData.activeLyricsTab]} onChange={handleLyricsChange} />
  </div>
</div>

<div>
  Meaning
  <div className="tabs">
    <button type="button" className={`tab-button ${formData.activeMeaningTab === 'english' ? 'active' : ''}`} onClick={() => handleMeaningTabClick('english')}>English</button>
    <button type="button" className={`tab-button ${formData.activeMeaningTab === 'hindi' ? 'active' : ''}`} onClick={() => handleMeaningTabClick('hindi')}>Hindi</button>
    <button type="button" className={`tab-button ${formData.activeMeaningTab === 'spanish' ? 'active' : ''}`} onClick={() => handleMeaningTabClick('spanish')}>Spanish</button>
    <button type="button" className={`tab-button ${formData.activeMeaningTab === 'french' ? 'active' : ''}`} onClick={() => handleMeaningTabClick('french')}>French</button>
    <button type="button" className={`tab-button ${formData.activeMeaningTab === 'german' ? 'active' : ''}`} onClick={() => handleMeaningTabClick('german')}>German</button>
  </div>
  <div className="tab-content">
    <textarea placeholder={`Enter Meaning in ${formData.activeMeaningTab}`} value={formData.meaning[formData.activeMeaningTab]} onChange={handleMeaningChange} />
  </div>
</div>

        
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SongForm;
