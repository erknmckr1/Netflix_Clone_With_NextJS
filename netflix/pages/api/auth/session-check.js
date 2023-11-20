import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  try {
    const session = await getSession({ req });

    if (session) {
      res.status(200).json({ authenticated: true });
      console.log("Oturum açıldı:", session);
    } else {
      res.status(200).json({ authenticated: false });
      console.log("Oturum açılamadı");
    }
  } catch (error) {
    console.error("Oturum kontrolü sırasında bir hata oluştu:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export default handler;
