require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const limiter = require("./middlewares/rate-limit");
const error = require("./middlewares/error");
const notFound = require("./middlewares/not-found");
const authRoute = require("./routes/auth-route");
const guestRoute = require("./routes/guest-route");
const tripRoute = require("./routes/trip-route");
const authenticate = require("./middlewares/authenticate");
const prisma = require("./models/prisma");

const app = express();

app.use(cors());
app.use(express.json());
app.use(limiter);
app.use(morgan("dev"));
app.use("/public", express.static("public"));
app.patch("/updateStatus", async (req, res, next) => {
  const data = await prisma.trip.findMany();
  const A = async (id) => {
    await prisma.trip.update({
      where: { id },
      data: { statusTrip: "SUCCESS" },
    });
  };
  const endDate1 = data.map((el) => {
    if (new Date() > new Date(el.endDate)) {
      console.log(el.endDate + "");
      A(el.id);
    }
  });
});

app.use("/auth", authRoute);
app.use("/guest", guestRoute);
app.use("/trips", authenticate, tripRoute);

app.use(notFound);
app.use(error);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`server ${PORT} running`));
