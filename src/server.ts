import express from "express";
import { sessionMiddleware } from "./middlewares/session";
import { auditMiddleware } from "./middlewares/audit";
import { router } from "./router";
import { createI18n } from "./config/i18n";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import { errorHandler } from "./middlewares/errorHandler";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.disable("x-powered-by");

app.use(express.static("public"));

app.use(auditMiddleware);
app.use(sessionMiddleware);
app.use(router);
app.use(createI18n());
app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
