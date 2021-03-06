import { GuardFunction, Next } from "@typeit/discord";
import { Client } from "discord.js";
import { Student, Status } from "../../database/entity/Student";

const Authenticated: GuardFunction<"message" | "guildMemberAdd"> = async (
    [payload]: any,
    client: Client,
    next: Next,
    guardData: {
        student: Student
    }
) => {
    const isBot = () => {
        if (payload.constructor.name === "Message") {
            return payload.author.bot;
        } else if (payload.constructor.name === "GuildMember") {
            return payload.user.bot;
        }
    }

    if (isBot()) return;

    const userId = () => {
        if (payload.constructor.name === "Message") {
            return payload.author.id;
        } else if (payload.constructor.name === "GuildMember") {
            return payload.user.id;
        }
    }

    guardData.student = await Student.findOne({
        user_id: userId()
    });

    if (guardData.student === undefined || guardData.student.status !== Status.COMPLETE) return;

    await next();
}

export default Authenticated;