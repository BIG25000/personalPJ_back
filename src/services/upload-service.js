const clodinary = require("../config/clodinary");

exports.upload = async (path) => {
  const { secure_url } = await clodinary.uploader.upload(path, {
    use_filename: true,
  });
  console.log("UpSerrrrrrrrrrrrrrrrrrrrrrr");
  return secure_url;
};
