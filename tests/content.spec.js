import { test, expect } from '@playwright/test'

test.describe('Page Content', () => {
  test.describe('Home Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/')
    })

    test('has correct page title', async ({ page }) => {
      await expect(page).toHaveTitle('Arkadia Labs GmbH')
    })

    test('displays hero section with company name', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Arkadia Labs GmbH', level: 1 })).toBeVisible()
    })

    test('displays hero tagline', async ({ page }) => {
      await expect(page.getByText('Empowering businesses through modern cloud solutions and DevOps excellence')).toBeVisible()
    })

    test('displays Swiss Cloud Excellence badge', async ({ page }) => {
      await expect(page.getByText('Swiss Cloud Excellence')).toBeVisible()
    })

    test('displays stats section', async ({ page }) => {
      await expect(page.getByText('6+')).toBeVisible()
      await expect(page.getByText('Core Services')).toBeVisible()
      await expect(page.getByText('Swiss', { exact: true })).toBeVisible()
      await expect(page.getByText('Precision', { exact: true })).toBeVisible()
      await expect(page.getByText('24/7')).toBeVisible()
      await expect(page.getByText('Support', { exact: true })).toBeVisible()
    })

    test('displays Core Expertise section', async ({ page }) => {
      await expect(page.getByText('What We Do')).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Core Expertise', level: 2 })).toBeVisible()
    })

    test('displays three service cards', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Cloud Architecture', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'DevOps Automation', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Cloud Security', level: 3 })).toBeVisible()
    })

    test('displays service descriptions', async ({ page }) => {
      await expect(page.getByText('Design scalable and secure cloud infrastructure on AWS, Azure, and GCP')).toBeVisible()
      await expect(page.getByText('Implement CI/CD pipelines and automate infrastructure deployment')).toBeVisible()
      await expect(page.getByText('Implement best practices for secure cloud operations and compliance')).toBeVisible()
    })

    test('displays Why Arkadia Labs section', async ({ page }) => {
      await expect(page.getByText('Why Arkadia Labs')).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Swiss precision meets cloud innovation', level: 2 })).toBeVisible()
    })

    test('displays expertise bullet points', async ({ page }) => {
      await expect(page.getByText('Multi-cloud expertise across AWS, Azure, and GCP')).toBeVisible()
      await expect(page.getByText('End-to-end DevOps transformation')).toBeVisible()
      await expect(page.getByText('Security-first approach with compliance automation')).toBeVisible()
      await expect(page.getByText('Dedicated support and knowledge transfer')).toBeVisible()
    })

    test('displays CTA section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Ready to transform your infrastructure?', level: 2 })).toBeVisible()
    })
  })

  test.describe('Services Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/services')
    })

    test('has correct page title', async ({ page }) => {
      await expect(page).toHaveTitle('Arkadia Labs GmbH')
    })

    test('displays Services heading', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Services', level: 1 })).toBeVisible()
      await expect(page.getByText('Our Expertise')).toBeVisible()
    })

    test('displays all six service categories', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Cloud Architecture & Migration', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'DevOps Transformation', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Cloud Security & Compliance', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Site Reliability Engineering', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Infrastructure Automation', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Cloud Native Development', level: 3 })).toBeVisible()
    })

    test('displays Cloud Architecture & Migration features', async ({ page }) => {
      await expect(page.getByText('Multi-cloud architecture design')).toBeVisible()
      await expect(page.getByText('Cloud migration strategy')).toBeVisible()
      await expect(page.getByText('Infrastructure as Code (IaC)')).toBeVisible()
      await expect(page.getByText('Cost optimization')).toBeVisible()
    })

    test('displays DevOps Transformation features', async ({ page }) => {
      await expect(page.getByText('CI/CD pipeline implementation')).toBeVisible()
      await expect(page.getByText('Container orchestration')).toBeVisible()
      await expect(page.getByText('Microservices architecture')).toBeVisible()
      await expect(page.getByText('DevOps culture coaching')).toBeVisible()
    })

    test('displays Cloud Security & Compliance features', async ({ page }) => {
      await expect(page.getByText('Security architecture review')).toBeVisible()
      await expect(page.getByText('Compliance automation')).toBeVisible()
      await expect(page.getByText('Identity & access management')).toBeVisible()
      await expect(page.getByText('Security monitoring')).toBeVisible()
    })

    test('displays Site Reliability Engineering features', async ({ page }) => {
      await expect(page.getByText('SLO/SLI implementation')).toBeVisible()
      await expect(page.getByText('Monitoring & alerting')).toBeVisible()
      await expect(page.getByText('Incident response')).toBeVisible()
      await expect(page.getByText('Performance optimization')).toBeVisible()
    })

    test('displays Infrastructure Automation features', async ({ page }) => {
      await expect(page.getByText('Terraform deployment')).toBeVisible()
      await expect(page.getByText('Ansible automation')).toBeVisible()
      await expect(page.getByText('GitOps workflows')).toBeVisible()
      await expect(page.getByText('Configuration management')).toBeVisible()
    })

    test('displays Cloud Native Development features', async ({ page }) => {
      await expect(page.getByText('Kubernetes deployment')).toBeVisible()
      await expect(page.getByText('Serverless architecture')).toBeVisible()
      await expect(page.getByText('API design')).toBeVisible()
      await expect(page.getByText('Cloud-native patterns')).toBeVisible()
    })

    test('displays Our Approach section', async ({ page }) => {
      await expect(page.getByText('How We Work')).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Our Approach', level: 2 })).toBeVisible()
    })

    test('displays four approach steps', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Discover', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Design', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Implement', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Optimize', level: 3 })).toBeVisible()
    })

    test('displays CTA section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: "Let's build something great together", level: 2 })).toBeVisible()
    })
  })

  test.describe('Impressum Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/impressum')
    })

    test('displays Impressum heading', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Impressum', level: 1 })).toBeVisible()
    })

    test('displays Company Information section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Company Information', level: 2 })).toBeVisible()
      await expect(page.getByRole('main').getByText('Arkadia Labs GmbH').first()).toBeVisible()
      await expect(page.getByRole('main').getByText('Blegistrasse 11B').first()).toBeVisible()
      await expect(page.getByRole('main').getByText('6341 Baar').first()).toBeVisible()
      await expect(page.getByRole('main').getByText('Switzerland').first()).toBeVisible()
    })

    test('displays Contact section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Contact', level: 2 })).toBeVisible()
    })

    test('displays Legal Form section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Legal Form', level: 2 })).toBeVisible()
      await expect(page.getByText(/limited liability company/)).toBeVisible()
    })

    test('displays Responsible for Content section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Responsible for Content', level: 2 })).toBeVisible()
    })

    test('displays Disclaimer section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Disclaimer', level: 2 })).toBeVisible()
      await expect(page.getByText(/Liability for Content/)).toBeVisible()
      await expect(page.getByText(/Liability for Links/)).toBeVisible()
    })

    test('displays Copyright section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Copyright', level: 2 })).toBeVisible()
      await expect(page.getByText(/Swiss copyright law/)).toBeVisible()
    })

    test('displays Governing Law section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Governing Law', level: 2 })).toBeVisible()
      await expect(page.getByText(/Canton of Zug/)).toBeVisible()
    })

    test('displays last updated date', async ({ page }) => {
      await expect(page.getByText(/Last updated: January 2026/)).toBeVisible()
    })
  })

  test.describe('Privacy Policy Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/privacy')
    })

    test('displays Privacy Policy heading', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Privacy Policy', level: 1 })).toBeVisible()
    })

    test('displays FADP reference', async ({ page }) => {
      await expect(page.getByText(/Swiss Federal Act on Data Protection/).first()).toBeVisible()
    })

    test('displays all 12 sections', async ({ page }) => {
      await expect(page.getByRole('heading', { name: '1. Data Controller', level: 2 })).toBeVisible()
      await expect(page.getByRole('heading', { name: '2. Data We Collect', level: 2 })).toBeVisible()
      await expect(page.getByRole('heading', { name: '3. Purpose of Data Processing', level: 2 })).toBeVisible()
      await expect(page.getByRole('heading', { name: '4. Legal Basis', level: 2 })).toBeVisible()
      await expect(page.getByRole('heading', { name: '5. Data Sharing', level: 2 })).toBeVisible()
      await expect(page.getByRole('heading', { name: '6. Data Retention', level: 2 })).toBeVisible()
      await expect(page.getByRole('heading', { name: '7. Your Rights', level: 2 })).toBeVisible()
      await expect(page.getByRole('heading', { name: '8. Cookies', level: 2 })).toBeVisible()
      await expect(page.getByRole('heading', { name: '9. Data Security', level: 2 })).toBeVisible()
      await expect(page.getByRole('heading', { name: '10. International Data Transfers', level: 2 })).toBeVisible()
      await expect(page.getByRole('heading', { name: '11. Changes to This Policy', level: 2 })).toBeVisible()
      await expect(page.getByRole('heading', { name: '12. Contact & Complaints', level: 2 })).toBeVisible()
    })

    test('displays user rights list', async ({ page }) => {
      await expect(page.getByText('Right of Access')).toBeVisible()
      await expect(page.getByText('Right to Rectification')).toBeVisible()
      await expect(page.getByText('Right to Deletion')).toBeVisible()
      await expect(page.getByText('Right to Data Portability')).toBeVisible()
      await expect(page.getByText('Right to Object')).toBeVisible()
      await expect(page.getByText('Right to Withdraw Consent')).toBeVisible()
    })

    test('displays cookie information', async ({ page }) => {
      await expect(page.getByText(/essential cookies/)).toBeVisible()
      await expect(page.getByText(/theme preference/)).toBeVisible()
    })

    test('displays FDPIC reference', async ({ page }) => {
      await expect(page.getByText(/Federal Data Protection and Information Commissioner/)).toBeVisible()
    })

    test('displays last updated date', async ({ page }) => {
      await expect(page.getByText(/Last updated: January 2026/)).toBeVisible()
    })
  })

  test.describe('Footer Content', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/')
    })

    test('displays company tagline', async ({ page }) => {
      await expect(page.getByRole('contentinfo').getByText('Empowering businesses with cloud expertise and DevOps excellence')).toBeVisible()
    })

    test('displays Navigation section', async ({ page }) => {
      await expect(page.getByRole('contentinfo').getByRole('heading', { name: 'Navigation', level: 3 })).toBeVisible()
    })

    test('displays Contact section with email and phone', async ({ page }) => {
      await expect(page.getByRole('contentinfo').getByRole('heading', { name: 'Contact', level: 3 })).toBeVisible()
      await expect(page.getByRole('contentinfo').getByText('halderm@arkadia-labs.io')).toBeVisible()
      await expect(page.getByRole('contentinfo').getByText('+41 41 768 11 61')).toBeVisible()
    })

    test('displays Address section', async ({ page }) => {
      await expect(page.getByRole('contentinfo').getByRole('heading', { name: 'Address', level: 3 })).toBeVisible()
      await expect(page.getByRole('contentinfo').getByText('Blegistrasse 11B')).toBeVisible()
      await expect(page.getByRole('contentinfo').getByText('6341 Baar')).toBeVisible()
    })

    test('displays copyright notice with current year', async ({ page }) => {
      const currentYear = new Date().getFullYear()
      await expect(page.getByText(new RegExp(`© ${currentYear} Arkadia Labs GmbH`))).toBeVisible()
    })

    test('displays Based in Switzerland indicator', async ({ page }) => {
      await expect(page.getByText('Based in Switzerland')).toBeVisible()
    })
  })
})
