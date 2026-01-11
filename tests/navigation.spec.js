import { test, expect } from '@playwright/test'

test.describe('Navigation Links', () => {
  test.describe('Header Navigation', () => {
    test('logo navigates to home page', async ({ page }) => {
      await page.goto('/services')
      await page.getByRole('banner').getByRole('link', { name: 'Arkadia Labs' }).click()
      await expect(page).toHaveURL('/')
    })

    test('Home link navigates to home page', async ({ page }) => {
      await page.goto('/services')
      await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click()
      await expect(page).toHaveURL('/')
    })

    test('Services link navigates to services page', async ({ page }) => {
      await page.goto('/')
      await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click()
      await expect(page).toHaveURL('/services')
    })

    test('active navigation link is highlighted', async ({ page }) => {
      await page.goto('/')
      const homeLink = page.getByRole('navigation').getByRole('link', { name: 'Home' })
      await expect(homeLink).toHaveClass(/text-primary/)

      await page.goto('/services')
      const servicesLink = page.getByRole('navigation').getByRole('link', { name: 'Services' })
      await expect(servicesLink).toHaveClass(/text-primary/)
    })
  })

  test.describe('Hero Section Links', () => {
    test('Explore Services button navigates to services page', async ({ page }) => {
      await page.goto('/')
      await page.getByRole('link', { name: 'Explore Services' }).click()
      await expect(page).toHaveURL('/services')
    })

    test('Get in Touch button has correct mailto link', async ({ page }) => {
      await page.goto('/')
      const link = page.getByRole('link', { name: 'Get in Touch' })
      await expect(link).toHaveAttribute('href', 'mailto:halderm@arkadia-labs.io')
    })
  })

  test.describe('Home Page Content Links', () => {
    test('View All Services button navigates to services page', async ({ page }) => {
      await page.goto('/')
      await page.getByRole('link', { name: 'View All Services' }).click()
      await expect(page).toHaveURL('/services')
    })

    test('Start a Conversation button has correct mailto link', async ({ page }) => {
      await page.goto('/')
      const link = page.getByRole('main').getByRole('link', { name: 'Start a Conversation' })
      await expect(link).toHaveAttribute('href', 'mailto:halderm@arkadia-labs.io')
    })
  })

  test.describe('Footer Navigation', () => {
    test('footer logo navigates to home page', async ({ page }) => {
      await page.goto('/services')
      await page.getByRole('contentinfo').getByRole('link', { name: 'Arkadia Labs' }).click()
      await expect(page).toHaveURL('/')
    })

    test('Home link in footer navigates to home page', async ({ page }) => {
      await page.goto('/services')
      await page.getByRole('contentinfo').getByRole('link', { name: 'Home' }).click()
      await expect(page).toHaveURL('/')
    })

    test('Services link in footer navigates to services page', async ({ page }) => {
      await page.goto('/')
      await page.getByRole('contentinfo').getByRole('link', { name: 'Services' }).click()
      await expect(page).toHaveURL('/services')
    })

    test('Impressum link navigates to impressum page', async ({ page }) => {
      await page.goto('/')
      await page.getByRole('link', { name: 'Impressum' }).click()
      await expect(page).toHaveURL('/impressum')
    })

    test('Privacy Policy link navigates to privacy page', async ({ page }) => {
      await page.goto('/')
      await page.getByRole('link', { name: 'Privacy Policy' }).click()
      await expect(page).toHaveURL('/privacy')
    })

    test('email link has correct mailto href', async ({ page }) => {
      await page.goto('/')
      const emailLink = page.getByRole('contentinfo').getByRole('link', { name: 'halderm@arkadia-labs.io' })
      await expect(emailLink).toHaveAttribute('href', 'mailto:halderm@arkadia-labs.io')
    })

    test('phone link has correct tel href', async ({ page }) => {
      await page.goto('/')
      const phoneLink = page.getByRole('link', { name: '+41 41 768 11 61' })
      await expect(phoneLink).toHaveAttribute('href', 'tel:+41417681161')
    })
  })

  test.describe('Legal Pages Navigation', () => {
    test('Back to Home link on Impressum page works', async ({ page }) => {
      await page.goto('/impressum')
      await page.getByRole('link', { name: 'Back to Home' }).click()
      await expect(page).toHaveURL('/')
    })

    test('Back to Home link on Privacy page works', async ({ page }) => {
      await page.goto('/privacy')
      await page.getByRole('link', { name: 'Back to Home' }).click()
      await expect(page).toHaveURL('/')
    })

    test('email links on Impressum page work', async ({ page }) => {
      await page.goto('/impressum')
      const emailLink = page.getByRole('main').getByRole('link', { name: 'halderm@arkadia-labs.io' })
      await expect(emailLink).toHaveAttribute('href', 'mailto:halderm@arkadia-labs.io')
    })

    test('phone link on Impressum page works', async ({ page }) => {
      await page.goto('/impressum')
      const phoneLink = page.getByRole('main').getByRole('link', { name: '+41 41 768 11 61' })
      await expect(phoneLink).toHaveAttribute('href', 'tel:+41417681161')
    })

    test('email links on Privacy page work', async ({ page }) => {
      await page.goto('/privacy')
      const emailLinks = page.getByRole('main').getByRole('link', { name: 'halderm@arkadia-labs.io' })
      const count = await emailLinks.count()
      expect(count).toBeGreaterThan(0)
      for (let i = 0; i < count; i++) {
        await expect(emailLinks.nth(i)).toHaveAttribute('href', 'mailto:halderm@arkadia-labs.io')
      }
    })
  })

  test.describe('Services Page Links', () => {
    test('Start a Conversation button has correct mailto link', async ({ page }) => {
      await page.goto('/services')
      const link = page.getByRole('main').getByRole('link', { name: 'Start a Conversation' })
      await expect(link).toHaveAttribute('href', 'mailto:halderm@arkadia-labs.io')
    })
  })
})
