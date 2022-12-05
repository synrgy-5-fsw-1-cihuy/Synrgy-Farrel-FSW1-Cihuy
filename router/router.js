const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.status(200).send("Anjas");
});

const {
  registerSuper,
  getAdmin,
  registerAdmin,
  registerUser,
  loginCheck,
  tokenCheck,
} = require("../controller/login_handler");

const {
  addCar,
  deleteCar,
  updateCar,
  getAllCar,
  getCarbyId,
} = require("../controller/cars_handler");

const encryptPassword = require("../middleware/encrypt");
const auth = require("../middleware/auth");

// superadmin data = {
//   email:"aing@super.gg",
//   password:"palingsuper",
//   secret:'akusuper'
// }

/**
 * @swagger
 *  components:
 *   schemas:
 *     user_login:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        id:
 *          type: integer
 *          description: The generated ID's user_login model
 *        email:
 *          type: string
 *          description: The user's email
 *        password:
 *          type: string
 *          description: The user's hashed password
 *        role:
 *          type: string
 *          description: The user's role. Used for authorization
 *        createdAt:
 *          type: timestamp
 *          description: The Created data date
 *        updatedAt:
 *          type: timestamp
 *          description: The updated data date
 */

/**
 * @swagger
 *  components:
 *   schemas:
 *     cars:
 *      type: object
 *      required:
 *        - brand
 *        - model
 *        - year
 *      properties:
 *        id:
 *          type: integer
 *          description: The generated ID's Post model
 *        brand:
 *          type: string
 *          description: The car's brand
 *        model:
 *          type: string
 *          description: The car's model
 *        year:
 *          type: integer
 *          description: The car's manufactured year
 *        createdby:
 *          type: string
 *          description: The user who created the data
 *        updatedby:
 *          type: string
 *          description: The user who updated the data
 *        deletedby:
 *          type: string
 *          description: The user who deleted the data
 *        createdAt:
 *          type: timestamp
 *          description: The Created data date
 *        updatedAt:
 *          type: timestamp
 *          description: The updated data date
 *        deletedAt:
 *          type: timestamp
 *          description: The soft data date
 */

/**
 * @swagger
 *   /getadmins/:
 *      get:
 *        summary: Get all users
 *        tags: [user_login]
 *        responses:
 *          "200":
 *            description: Retrieve all users data
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 * @swagger
 *   /super/:
 *      post:
 *        summary: Create a superadmin account with secret key
 *        tags: [user_login]
 *        requestBody:
 *          required:true
 *        responses:
 *          "200":
 *            description: Retrieve posts by id
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 * @swagger
 *   /admin/:
 *      post:
 *        summary: Create an admin account (superadmin only)
 *        tags: [user_login]
 *        requestBody:
 *          required:true
 *        responses:
 *          "200":
 *            description: Retrieve posts by id
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 * @swagger
 *   /user/:
 *      post:
 *        summary: Create a user account
 *        tags: [user_login]
 *        requestBody:
 *          required:true
 *        responses:
 *          "200":
 *            description: Retrieve posts by id
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 * @swagger
 *   /login/:
 *      post:
 *        summary: Authenticate user
 *        tags: [user_login]
 *        requestBody:
 *          required:true
 *        responses:
 *          "200":
 *            description: Retrieve posts by id
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 * @swagger
 *   /token/:
 *      get:
 *        summary: Check current user's token
 *        tags: [user_login]
 *        requestBody:
 *          required:true
 *        responses:
 *          "200":
 *            description: Retrieve posts by id
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 */

router.post("/super", encryptPassword, registerSuper);
router.get("/getadmins", getAdmin);
router.post("/admin", auth, encryptPassword, registerAdmin);
router.post("/user", auth, encryptPassword, registerUser);
router.post("/login", loginCheck);
router.get("/token", auth, tokenCheck);

/**
 * @swagger
 *   /cars/:
 *      get:
 *        summary: Get all cars
 *        tags: [cars]
 *        parameters:
 *          - in: path
 *            name: id
 *          - in:path
 *            kontil:id
 *        responses:
 *          "200":
 *            description: Retrieve posts by id
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 * @swagger
 *   /cars/:id:
 *      get:
 *        summary: Get car by id
 *        tags: [cars]
 *        parameters:
 *          - in: path
 *            name: id
 *          - in:path
 *            kontil:id
 *        responses:
 *          "200":
 *            description: Retrieve posts by id
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 * @swagger
 *   /cars/add:
 *      post:
 *        summary: Post new car
 *        tags: [cars]
 *        parameters:
 *          - in: path
 *            name: id
 *          - in:path
 *            kontil:id
 *        responses:
 *          "201":
 *            description: Retrieve posts by id
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 * @swagger
 *   /cars/update/:id:
 *      put:
 *        summary: Update a car data by id
 *        tags: [cars]
 *        parameters:
 *          - in: path
 *            name: id
 *          - in:path
 *            kontil:id
 *        responses:
 *          "204":
 *            description: Retrieve posts by id
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 * @swagger
 *   /cars/delete/:id:
 *      delete:
 *        summary: Delete a car data by id (soft deletion)
 *        tags: [cars]
 *        parameters:
 *          - in: path
 *            name: id
 *          - in:path
 *            kontil:id
 *        responses:
 *          "204":
 *            description: Retrieve posts by id
 *            content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Post'
 */

router.post("/cars/add", auth, addCar);
router.put("/cars/update/:id", auth, updateCar);
router.delete("/cars/delete/:id", auth, deleteCar);
router.get("/cars/", getAllCar);
router.get("/cars/:id", getCarbyId);

router.get("/tes", auth, (req, res) => {
  const data = req.user;
  console.log(req.user.role);
  res.status(200).json(data);
});

module.exports = router;
