import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

// Button click event handler for InMain and InExternal
function handleHMRButtonClick(event, callback) {
  event.stopPropagation();

  if (callback)
    callback();
}

const TabContainer = ({
  appState,
  setActiveTab,
  closeTab,
  handleOpenSimulator_Main,
  handleOpenSimulator_Ext
}) => {
  const tabs = [];
  // for (var i = 0; i < appState.openTabs.length; i++) {
  //   tabs.push(
  //     <Tab 
  //       key={i} 
  //       name={appState.openTabs[i].name} 
  //       setActiveTab={setActiveTab} 
  //       id={appState.openTabs[i].id} 
  //       closeTab={closeTab}
  //     />);
  // }
  for (let key in appState.openTabs) {
    tabs.push(
      <Tab
        key={key}
        name={appState.openTabs[key].name}
        isActive={appState.previousPaths[appState.previousPaths.length - 1] === key}
        setActiveTab={setActiveTab}
        path={key}
        closeTab={closeTab}
      />
    );
  }
  return (
    <div id="editor-tabbar-container">
      <div id="editor-tabbar-left">
        <ul className="list-inline tab-bar inset-panel tab-container">
          {tabs}
        </ul>
      </div>
      <div id="editor-tabbar-right">
        <div id="btn-hmr-group">
          <i className="fas fa-desktop" />HMR
          <div id="btn-hmr-main" className="btn" onClick={(event) => handleHMRButtonClick(event, handleOpenSimulator_Main)}>
            <i className="fas fa-window-maximize" />
          </div>
          <div id="btn-hmr-ext" className="btn" onClick={(event) => handleHMRButtonClick(event, handleOpenSimulator_Ext)}>
            <i className="fas fa-window-restore"></i>
          </div>
        </div>
      </div>
    </div>
  )
};

TabContainer.propTypes = {
  appState: PropTypes.object.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  closeTab: PropTypes.func.isRequired
}

export default TabContainer;