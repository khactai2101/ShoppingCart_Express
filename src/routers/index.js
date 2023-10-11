import roleRouter from "./roleRouter";
import brandRouter from "./brandRouter";
import CategoriesRouter from "./CategoriesRouter";
import ReviewRouter from "./reviewRouter";
import imageRouter from "./imageRouter";
import authRouter from "./authRouter";
import userRouter from "./userRouter";
import addressRouter from "./addressRouter";

const initRouters = (app) => {
  const initLink = "/api/v1";

  app.use(`${initLink}/role`, roleRouter);
  app.use(`${initLink}/brand`, brandRouter);
  app.use(`${initLink}/categories`, CategoriesRouter);
  app.use(`${initLink}/reviews`, ReviewRouter);
  app.use(`${initLink}/images`, imageRouter);
  app.use(`${initLink}/auth`, authRouter);
  app.use(`${initLink}/users`, userRouter);
  app.use(`${initLink}/address`, addressRouter);
};

module.exports = initRouters;
