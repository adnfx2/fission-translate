var BasicEnglishLocalization = artifacts.require("./BasicEnglishLocalization.sol"); // eslint-disable-line no-undef
var PirateLocalization = artifacts.require("./PirateLocalization.sol"); // eslint-disable-line no-undef

module.exports = (deployer) => {
  deployer.deploy(BasicEnglishLocalization);
  deployer.deploy(PirateLocalization);
};
