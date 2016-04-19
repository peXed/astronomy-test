import Settings from '/imports/classes/setting.js';

if(!Settings.findOne()) {
  console.log("No Settings found. Insert default Settings.");
  let newSetting = new Settings();
  newSetting.defaultName = "Test Default Name from Settings";
  newSetting.save();
}
