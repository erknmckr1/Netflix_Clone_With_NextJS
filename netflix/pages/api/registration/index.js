import pool from "@/lib/dbConnect";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "POST") {
    const {
      id,
      email,
      password,
      first_name,
      last_name,
      phone_number,
      secret_key,
    } = req.body;
    try {
      // veır tabanında gırılen email var mı yok mu kontrol edıyoruz.
      const checkUser = await pool.query(
        "SELECT * FROM public.users WHERE email = $1",
        [email]
      );

      let createRegister;

      if (checkUser.rows.length === 0) {
        createRegister = await pool.query(
          "INSERT INTO public.users(id, email, password, first_name, last_name, phone_number, secret_key) VALUES ($1,$2,$3,$4,$5,$6,$7);",
          [id, email, password, first_name, last_name, phone_number, secret_key]
        );
      }

      if (createRegister && createRegister.rowCount > 0) {
        return res.status(201).json({ message: "User created" });
      } else {
        throw new Error("Failed to register user");
      }
    } catch (err) {
      console.log(err);
    }
  } else if (method === "GET") {
    try {
      const result = await pool.query(" SELECT * FROM public.users");
      if (result.rows.length > 0) {
        res.status(200).json(result.rows);
      } else {
        res.status(500).json({ error: "Sunucu hatası" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Sunucu hatası" });
    }
  }
};

export default handler;
