import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,userName, res) => {
	const token = jwt.sign({ userId,userName }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		httpOnly: true,
		maxAge: 15 * 24 * 60 * 60 * 1000,
		sameSite: "strict", 
	});

	return token;
};

export default generateTokenAndSetCookie;
