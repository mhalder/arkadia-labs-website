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
      await expect(page.getByRole('heading', { name: 'Arkadia Labs', level: 1 })).toBeVisible()
    })

    test('displays hero tagline', async ({ page }) => {
      await expect(page.getByText('I help companies build and run cloud infrastructure that actually works.')).toBeVisible()
    })

    test('displays location badge', async ({ page }) => {
      await expect(page.getByText('Cloud & DevOps Consulting — Baar, Switzerland')).toBeVisible()
    })

    test('displays Services section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Services', level: 2 })).toBeVisible()
    })

    test('displays three service cards', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Cloud Architecture', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'DevOps & Automation', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Security & Compliance', level: 3 })).toBeVisible()
    })

    test('displays service descriptions', async ({ page }) => {
      await expect(page.getByText(/AWS, Azure, or GCP — I design infrastructure/)).toBeVisible()
      await expect(page.getByText(/CI\/CD pipelines, infrastructure as code, containers/)).toBeVisible()
      await expect(page.getByText(/Locking down your cloud and making sure it passes audits/)).toBeVisible()
    })

    test('displays About section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'About', level: 2 })).toBeVisible()
    })

    test('displays about description', async ({ page }) => {
      await expect(page.getByText(/I'm Martin, and I run Arkadia Labs/)).toBeVisible()
    })

    test('displays expertise bullet points', async ({ page }) => {
      await expect(page.getByText('AWS, Azure, and GCP — not married to any one provider')).toBeVisible()
      await expect(page.getByText('Terraform, Kubernetes, GitOps — the tools I use daily')).toBeVisible()
      await expect(page.getByText('I build things, then I make sure your team can run them')).toBeVisible()
      await expect(page.getByText('Clear communication, no jargon walls')).toBeVisible()
    })

    test('displays CTA section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Have a project in mind?', level: 2 })).toBeVisible()
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
    })

    test('displays all six service categories', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Cloud Architecture & Migration', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'DevOps & CI/CD', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Cloud Security & Compliance', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Site Reliability Engineering', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Infrastructure Automation', level: 3 })).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Cloud Native Development', level: 3 })).toBeVisible()
    })

    test('displays Cloud Architecture & Migration features', async ({ page }) => {
      await expect(page.getByText('Multi-cloud architecture design')).toBeVisible()
      await expect(page.getByText('Migration planning & execution')).toBeVisible()
      await expect(page.getByText('Infrastructure as Code (Terraform, Pulumi)')).toBeVisible()
      await expect(page.getByText('Cost optimization')).toBeVisible()
    })

    test('displays DevOps & CI/CD features', async ({ page }) => {
      await expect(page.getByText('CI/CD pipeline setup')).toBeVisible()
      await expect(page.getByText('Container orchestration')).toBeVisible()
      await expect(page.getByText('GitOps workflows')).toBeVisible()
      await expect(page.getByText('Team enablement & coaching')).toBeVisible()
    })

    test('displays Cloud Security & Compliance features', async ({ page }) => {
      await expect(page.getByText('Security architecture review')).toBeVisible()
      await expect(page.getByText('Compliance automation')).toBeVisible()
      await expect(page.getByText('Identity & access management')).toBeVisible()
      await expect(page.getByText('Security monitoring & alerting')).toBeVisible()
    })

    test('displays Site Reliability Engineering features', async ({ page }) => {
      await expect(page.getByText('SLO/SLI definition & tracking')).toBeVisible()
      await expect(page.getByText('Monitoring & alerting setup')).toBeVisible()
      await expect(page.getByText('Incident response processes')).toBeVisible()
      await expect(page.getByText('Performance optimization')).toBeVisible()
    })

    test('displays Infrastructure Automation features', async ({ page }) => {
      await expect(page.getByText('Terraform & OpenTofu')).toBeVisible()
      await expect(page.getByText('Ansible automation')).toBeVisible()
      await expect(page.getByText('GitOps with ArgoCD / Flux')).toBeVisible()
      await expect(page.getByText('Configuration management')).toBeVisible()
    })

    test('displays Cloud Native Development features', async ({ page }) => {
      await expect(page.getByText('Kubernetes deployment & operations')).toBeVisible()
      await expect(page.getByText('Serverless architecture')).toBeVisible()
      await expect(page.getByText('API design & integration')).toBeVisible()
      await expect(page.getByText('Platform engineering')).toBeVisible()
    })

    test('displays CTA section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Need help with any of this?', level: 2 })).toBeVisible()
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
      await expect(page.getByText(/Last updated: March 2026/)).toBeVisible()
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

    test('displays user rights section', async ({ page }) => {
      await expect(page.getByRole('heading', { name: '7. Your Rights', level: 2 })).toBeVisible()
      await expect(page.getByText(/want to know what data we have/)).toBeVisible()
    })

    test('displays local storage information', async ({ page }) => {
      await expect(page.getByText(/does not use cookies/)).toBeVisible()
      await expect(page.getByText(/browser local storage/)).toBeVisible()
    })

    test('displays FDPIC reference', async ({ page }) => {
      await expect(page.getByText(/Federal Data Protection and Information Commissioner/)).toBeVisible()
    })

    test('displays last updated date', async ({ page }) => {
      await expect(page.getByText(/Last updated: March 2026/)).toBeVisible()
    })
  })

  test.describe('Footer Content', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/')
    })

    test('displays company tagline', async ({ page }) => {
      await expect(page.getByRole('contentinfo').getByText('Cloud infrastructure and DevOps consulting, based in Switzerland.')).toBeVisible()
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
      await expect(page.getByRole('contentinfo').getByText('Based in Switzerland', { exact: true })).toBeVisible()
    })
  })
})
