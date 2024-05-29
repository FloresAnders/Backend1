const validNewUser = (user) => (!!user.name && !!user.email && !!user.password);

module.exports = {validNewUser};