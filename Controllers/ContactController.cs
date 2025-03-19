using System;
using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace YourNamespace.Controllers
{
    public class ContactController : Controller
    {
        private readonly IConfiguration _config;

        public ContactController(IConfiguration config)
        {
            _config = config;
        }

        [HttpPost]
        public ActionResult SendMessage(string name, string email, string message)
        {
            try
            {
                // **appsettings.json'dan SMTP bilgilerini çek**
                string smtpServer = _config["EmailSettings:SmtpServer"];
                int smtpPort = int.Parse(_config["EmailSettings:SmtpPort"]);
                string smtpUsername = _config["EmailSettings:SmtpUsername"];
                string smtpPassword = _config["EmailSettings:SmtpPassword"];
                bool enableSsl = bool.Parse(_config["EmailSettings:EnableSsl"]);

                // **SMTP ayarları**
                var smtpClient = new SmtpClient(smtpServer)
                {
                    Port = smtpPort,
                    Credentials = new NetworkCredential(smtpUsername, smtpPassword),
                    EnableSsl = enableSsl
                };

                // **Mail içeriği**
                var mailMessage = new MailMessage
                {
                    From = new MailAddress(smtpUsername, "Volass Grup"), 
                    Subject = "Bize Ulaşın Formu Mesajı",
                    Body = $"Ad Soyad: {name}\nE-Posta: {email}\nMesaj: {message}",
                    IsBodyHtml = false
                };

                // **Kullanıcı adresine cevap vermek istersen**
                mailMessage.ReplyToList.Add(new MailAddress(email));

                // **Alıcı adresi**
                mailMessage.To.Add(smtpUsername);

                // **Mail gönder**
                smtpClient.Send(mailMessage);

                // **Başarılı işlem sonucu**
                TempData["Success"] = "Mesajınız başarıyla gönderildi!";
                return RedirectToAction("Iletisim");
            }
            catch (Exception ex)
            {
                var errorMessage = $"Hata: {ex.Message}";

                // **Eğer bir InnerException varsa, bunu da ekle**
                if (ex.InnerException != null)
                {
                    errorMessage += $"\nDetay: {ex.InnerException.Message}";
                }

                TempData["Error"] = errorMessage;
                return RedirectToAction("Iletisim");
            }
        }
    



        // Contact View'i yükler
        public ActionResult Iletisim()
        {
            return View();
        }

[HttpPost]
        public ActionResult BultenKayit(string name, string email, string message)
        {
            try
            {
                // **appsettings.json'dan SMTP bilgilerini çek**
                string smtpServer = _config["EmailSettings:SmtpServer"];
                int smtpPort = int.Parse(_config["EmailSettings:SmtpPort"]);
                string smtpUsername = _config["EmailSettings:SmtpUsername"];
                string smtpPassword = _config["EmailSettings:SmtpPassword"];
                bool enableSsl = bool.Parse(_config["EmailSettings:EnableSsl"]);

                // **SMTP ayarları**
                var smtpClient = new SmtpClient(smtpServer)
                {
                    Port = smtpPort,
                    Credentials = new NetworkCredential(smtpUsername, smtpPassword),
                    EnableSsl = enableSsl
                };

                // **Mail içeriği**
                var mailMessage = new MailMessage
                {
                    From = new MailAddress(smtpUsername, "Volass Grup"), 
                    Subject = "Bize Ulaşın Formu Mesajı",
                    Body = $"Ad Soyad: {name}\nE-Posta: {email}\nMesaj: {message}",
                    IsBodyHtml = false
                };

                // **Kullanıcı adresine cevap vermek istersen**
                mailMessage.ReplyToList.Add(new MailAddress(email));

                // **Alıcı adresi**
                mailMessage.To.Add(smtpUsername);

                // **Mail gönder**
                smtpClient.Send(mailMessage);

                // **Başarılı işlem sonucu**
                TempData["Success"] = "Mesajınız başarıyla gönderildi!";
                return RedirectToAction("Iletisim");
            }
            catch (Exception ex)
            {
                var errorMessage = $"Hata: {ex.Message}";

                // **Eğer bir InnerException varsa, bunu da ekle**
                if (ex.InnerException != null)
                {
                    errorMessage += $"\nDetay: {ex.InnerException.Message}";
                }

                TempData["Error"] = errorMessage;
                return RedirectToAction("Iletisim");
            }
        }
           
        }
    }

