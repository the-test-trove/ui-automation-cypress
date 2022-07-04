import json
import smtplib
import requests
f=open('path to the json')
testdata=json.load(f)
print(testdata['stats'])
total_tests=testdata['stats']['tests']
total_failing=testdata['stats']['failures']
total_pass=testdata['stats']['passes']
total_skipped=testdata['stats']['skipped']
percentpass=round((int(total_pass)/int(total_tests))*100)
emails=['emailid']
smtp_server = "emailserverhostname"
port = 25
smtpAuth = "none"
sender_email = "sender email"
receiver_email =emails
message = """\
MIME-Version: 1.0
Content-type: text/html
Subject: Subject
From:{sender_mail} 
To: {to_mail}

<h3><i>Testing is completed. The Reports Are Ready:</i></h3>

<h5>Summary of Cypress Test Report:</h5> 
<table style="border-top: 1px solid #dee2e6;
  border-collapse: collapse;
  color: #434343;
  font-family: 'Red Hat Text';
  margin-left: 1rem;
  font-size: 16px;">
  <thead style="border-bottom: 2px solid #dee2e6;">
    <tr style="border-top: 1px solid #dee2e6;">
      <th style="padding: 1rem;
  padding-left: 0.5rem;
  text-align: left;">
        Test Metrics
      </th>
      <th style="padding: 1rem;
  padding-left: 0.5rem;
  text-align: left;">Count</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-top: 1px solid #dee2e6; border-left: 3px solid #007bff;">
      <td style="padding: 1.5rem;
  padding-left: 0.25rem">
        Total Tests
      </td>
      <td style="padding: 1.5rem;
  padding-left: 0.25rem">
        {total_tests}
      </td>
    </tr>
    <tr style="border-top: 1px solid #dee2e6; border-left: 3px solid red;">
      <td style="padding: 1.5rem;
  padding-left: 0.25rem">
        Total Failed Tests
      </td>
      <td style="padding: 1.5rem;
  padding-left: 0.25rem">
        {total_failing}
      </td>
    </tr>
    <tr style="border-top: 1px solid #dee2e6; border-left: 3px solid #28a745;">
      <td style="padding: 1.5rem;
  padding-left: 0.25rem">
        Total Passing Tests
      </td>
      <td style="padding: 1.5rem;
  padding-left: 0.25rem">
        {total_pass}
      </td>
    </tr>
    <tr style="border-top: 1px solid #dee2e6; border-left: 3px solid yellow;">
      <td style="padding: 1.5rem;
  padding-left: 0.25rem">
        Total Skipped Tests
      </td>
      <td style="padding: 1.5rem;
  padding-left: 0.25rem">
        {total_skipped}
      </td>
    </tr>
  </tbody>
</table>


<h4 style="color:gray">Report Link</h4>
https://one-platform.pages.redhat.com/one-platform-e2e/
<br><br>
Regards,<br>
""".format(sender_mail=sender_email, to_mail=emails, total_tests=total_tests,total_failing=total_failing, total_pass=total_pass,percentpass=percentpass,total_skipped=total_skipped)

with smtplib.SMTP(smtp_server, port) as server:
    server.connect("smtp server url",25)
    server.ehlo()  # Can be omitted
    server.set_debuglevel(1)
    server.sendmail(sender_email, emails, message)
