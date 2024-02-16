const clodinary = require("../config/clodinary");

exports.upload = async (path) => {
  const { secur_url } = await clodinary.uploader.upload(path, {
    use_filename: true,
  });
  return secur_url;
};
