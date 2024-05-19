const express = require("express");
const nodemailer = require("nodemailer");
const List = require("../models/List");
const User = require("../models/User");
const Unsubscribe = require("../models/Unsubsribe");

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "21052646@kiit.ac.in",
    pass: "unvhjmcnpiuafimo", //got the password from google account itself inside App Passwords
  },
});

router.post("/:listId/send", async (req, res) => {
  const { listId } = req.params;
  const { subject, body } = req.body;

  try {
    const list = await List.findById(listId);
    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }

    const unsubscribedEmails = await Unsubscribe.find({ listId }).select(
      "email"
    );
    const unsubscribedEmailSet = new Set(
      unsubscribedEmails.map((u) => u.email)
    );

    const users = await User.find({ listId });

    const emailPromises = users.map((user) => {
      if (unsubscribedEmailSet.has(user.email)) return null;
      
      let emailBody = body;

      // Replace placeholders for standard fields
      emailBody = emailBody.replace("[name]", user.name);
      emailBody = emailBody.replace("[email]", user.email);
      // Replace placeholders for custom properties
      list.customProperties.forEach((prop) => {
        emailBody = emailBody.replace(
          `[${prop.title}]`,
          user.properties.get(prop.title)
        );
      });

      return transporter.sendMail({
        from: '"✨ Akshat Jaiswal ✨" <21052646@kiit.ac.in>',
        to: user.email,
        subject: subject,
        // text: emailBody,
        html: emailBody,
      });
    });

    await Promise.all(emailPromises);

    res.json({ message: "Emails sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/unsubscribe", async (req, res) => {
  const { email, listId } = req.body;

  try {
    const unsubscribe = new Unsubscribe({ email, listId });
    await unsubscribe.save();
    res.json({ message: "Unsubscribed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
