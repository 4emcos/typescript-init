interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface MessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendEmail(request: MessageDTO): void;
}


class EmailService implements IEmailService {
    async sendEmail({ to, message } : MessageDTO ) {
        console.log(`Email sent to ${to.email} with message ${message.subject}`);
    }
}


export default EmailService;