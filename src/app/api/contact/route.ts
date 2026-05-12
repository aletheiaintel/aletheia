import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	const body = await req.json();
	const { fullName, email, company, service, message } = body;

	const companyRow = company
		? `
		<tr>
			<td style="padding:14px 20px;border-bottom:1px solid rgba(0,0,0,0.05);">
				<p style="margin:0 0 3px;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#999;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">Company</p>
				<p style="margin:0;font-size:15px;color:#121212;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${company}</p>
			</td>
		</tr>`
		: "";

	const html = `<!DOCTYPE html>
					<html lang="en">
					<head>
						<meta charset="UTF-8" />
						<meta name="viewport" content="width=device-width,initial-scale=1.0" />
						<title>New Inquiry — Aletheia</title>
					</head>
					<body style="margin:0;padding:0;background-color:#F5F0E8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
						<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#F5F0E8;">
							<tr>
								<td align="center" style="padding:40px 20px;">
									<table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.10);">

										<!-- Header -->
										<tr>
											<td style="background-color:#121212;padding:32px 40px;">
												<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
													<tr>
														<td style="vertical-align:middle;">
															<p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#ffffff;letter-spacing:-0.3px;font-weight:normal;">Aletheia</p>
															<p style="margin:4px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:12px;font-style:italic;color:#C9981A;letter-spacing:0.02em;">truth revealed.</p>
														</td>
														<td align="right" style="vertical-align:middle;">
															<span style="display:inline-block;background:rgba(201,152,26,0.15);border:1px solid rgba(201,152,26,0.4);border-radius:100px;padding:7px 18px;font-size:11px;color:#C9981A;letter-spacing:0.12em;text-transform:uppercase;font-family:-apple-system,sans-serif;font-weight:600;">New Inquiry</span>
														</td>
													</tr>
												</table>
											</td>
										</tr>

										<!-- Gold accent bar -->
										<tr>
											<td style="height:3px;background:linear-gradient(to right,#C9981A,#E8C46A,#C9981A);"></td>
										</tr>

										<!-- Body -->
										<tr>
											<td style="background-color:#FDFAF5;padding:40px 40px 0;">
												<p style="margin:0 0 6px;font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#1A7A4C;font-family:-apple-system,sans-serif;">Discovery Call Request</p>
												<h1 style="margin:0 0 32px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:normal;color:#121212;line-height:1.35;">${fullName} wants to start a conversation.</h1>

												<!-- Detail card -->
												<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;border:1px solid rgba(0,0,0,0.07);border-radius:14px;overflow:hidden;">

													<!-- Name -->
													<tr>
														<td style="padding:14px 20px;border-bottom:1px solid rgba(0,0,0,0.05);">
															<p style="margin:0 0 3px;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#999;font-family:-apple-system,sans-serif;">Full Name</p>
															<p style="margin:0;font-size:15px;color:#121212;font-family:-apple-system,sans-serif;">${fullName}</p>
														</td>
													</tr>

													<!-- Email -->
													<tr>
														<td style="padding:14px 20px;border-bottom:1px solid rgba(0,0,0,0.05);">
															<p style="margin:0 0 3px;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#999;font-family:-apple-system,sans-serif;">Email Address</p>
															<p style="margin:0;font-size:15px;font-family:-apple-system,sans-serif;"><a href="mailto:${email}" style="color:#C9981A;text-decoration:none;">${email}</a></p>
														</td>
													</tr>

													${companyRow}

													<!-- Service -->
													<tr>
														<td style="padding:14px 20px;border-bottom:1px solid rgba(0,0,0,0.05);">
															<p style="margin:0 0 8px;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#999;font-family:-apple-system,sans-serif;">Interested In</p>
															<span style="display:inline-block;background:rgba(201,152,26,0.10);border:1px solid rgba(201,152,26,0.35);border-radius:100px;padding:5px 14px;font-size:13px;color:#C9981A;font-weight:500;font-family:-apple-system,sans-serif;">${service}</span>
														</td>
													</tr>

													<!-- Message -->
													<tr>
														<td style="padding:14px 20px;">
															<p style="margin:0 0 3px;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#999;font-family:-apple-system,sans-serif;">Message</p>
															<p style="margin:0;font-size:15px;color:#333;line-height:1.75;white-space:pre-wrap;font-family:-apple-system,sans-serif;">${message}</p>
														</td>
													</tr>

												</table>
											</td>
										</tr>

										<!-- CTA -->
										<tr>
											<td style="background-color:#FDFAF5;padding:28px 40px 40px;">
												<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid rgba(0,0,0,0.07);padding-top:28px;">
													<tr>
														<td>
															<p style="margin:0 0 16px;font-size:14px;color:#666;line-height:1.6;font-family:-apple-system,sans-serif;">Reply directly to book a discovery call with ${fullName}:</p>
															<a href="mailto:${email}?subject=Re%3A%20Discovery%20Call%20%E2%80%94%20Aletheia" style="display:inline-block;background-color:#121212;color:#ffffff;text-decoration:none;padding:13px 30px;border-radius:100px;font-size:13px;font-family:-apple-system,sans-serif;font-weight:500;letter-spacing:0.04em;">Reply to ${fullName} &rarr;</a>
														</td>
													</tr>
												</table>
											</td>
										</tr>

										<!-- Footer -->
										<tr>
											<td style="background-color:#F5F0E8;padding:22px 40px;border-top:1px solid rgba(0,0,0,0.06);">
												<p style="margin:0;text-align:center;font-family:Georgia,'Times New Roman',serif;font-size:11px;font-style:italic;color:#999;">Aletheia Intelligence &middot; hello@aletheiaintl.com</p>
											</td>
										</tr>

									</table>
								</td>
							</tr>
						</table>
					</body>
					</html>
				`;

	try {
		await resend.emails.send({
			from: "Aletheia <hello@aletheiaintl.com>",
			to: "hello@aletheiaintl.com",
			replyTo: email,
			subject: `New Inquiry from ${fullName}`,
			html,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Resend error:", error);
		return NextResponse.json({ success: false }, { status: 500 });
	}
}
