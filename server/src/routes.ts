import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/healthz", async (req: Request, res: Response) => {
    res.status(200).json("Server is up!");
});

export default router;
