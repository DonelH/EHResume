# EHResume

# Portfolio site for my resume hosted over AWS

Based off the Cloud Resume Challange that can be found here: https://cloudresumechallenge.dev/docs/the-challenge/aws/ .

The majority of the project is implemented as follows:
- AWS Solutions Architect Associate certified
- HTML resume
- CSS to supplement the HTML
- Static website deployed via S3
- HTTPS implemented over Cloudfront
- DNS implemented via Route 53
- Javascript for the views counting
- Serverless DynamoDB database to store the value of the views
- API hosted over AWS API Gateway
- Python Lambda function to connect the API and DynamoDB interaction
- Terraform completed for the entire application starting from the artifacts for S3 and including all the steps above. Found here: https://github.com/DonelH/CRC-Terraform/blob/main/main.tf
- Code hosted over Github

Remaining tasks are listed as follows per the CRC:
- CI/CD for front and back end
- Testing
- Blog post
