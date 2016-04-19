import Settings from '/imports/classes/setting.js';

export default {

  get(settingName, defaultValue) {
    let data = Settings.findOne();
    console.log("SETTING", (data[settingName] || defaultValue || null));

    return data[settingName] || defaultValue || null;
  }

};
