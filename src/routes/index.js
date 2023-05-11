import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "MANGLAR - First Web Node" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "MANGLAR - About First Node Website" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});
router.get("/graficas", (req, res) => {
  res.render("graficas", { title: "graficas" });
});


export default router;
