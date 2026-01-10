import { test, expect } from '@playwright/test'

test.describe('Light/Dark Mode', () => {
  test.describe('Theme Toggle Button', () => {
    test('displays theme toggle button in header', async ({ page }) => {
      await page.goto('/')
      const themeButton = page.getByRole('button', { name: /Switch to (light|dark) mode/ })
      await expect(themeButton).toBeVisible()
    })

    test('toggle button shows correct icon for current theme', async ({ page }) => {
      await page.goto('/')
      // Clear localStorage to start fresh (defaults to dark)
      await page.evaluate(() => localStorage.removeItem('theme'))
      await page.reload()

      // Default is dark, so button should show "Switch to light mode"
      await expect(page.getByRole('button', { name: 'Switch to light mode' })).toBeVisible()
    })
  })

  test.describe('Theme Switching', () => {
    test('can toggle from dark to light mode', async ({ page }) => {
      await page.goto('/')
      // Clear localStorage to start fresh (defaults to dark)
      await page.evaluate(() => localStorage.removeItem('theme'))
      await page.reload()

      // Start in dark mode
      await expect(page.locator('html')).toHaveClass('dark')

      // Click to switch to light
      await page.getByRole('button', { name: 'Switch to light mode' }).click()

      // Should now be in light mode
      await expect(page.locator('html')).not.toHaveClass('dark')
      await expect(page.getByRole('button', { name: 'Switch to dark mode' })).toBeVisible()
    })

    test('can toggle from light to dark mode', async ({ page }) => {
      await page.goto('/')
      // Set light mode
      await page.evaluate(() => localStorage.setItem('theme', 'light'))
      await page.reload()

      // Should be in light mode
      await expect(page.locator('html')).not.toHaveClass('dark')

      // Click to switch to dark
      await page.getByRole('button', { name: 'Switch to dark mode' }).click()

      // Should now be in dark mode
      await expect(page.locator('html')).toHaveClass('dark')
      await expect(page.getByRole('button', { name: 'Switch to light mode' })).toBeVisible()
    })

    test('can toggle multiple times', async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => localStorage.removeItem('theme'))
      await page.reload()

      // Dark -> Light
      await page.getByRole('button', { name: 'Switch to light mode' }).click()
      await expect(page.locator('html')).not.toHaveClass('dark')

      // Light -> Dark
      await page.getByRole('button', { name: 'Switch to dark mode' }).click()
      await expect(page.locator('html')).toHaveClass('dark')

      // Dark -> Light
      await page.getByRole('button', { name: 'Switch to light mode' }).click()
      await expect(page.locator('html')).not.toHaveClass('dark')
    })
  })

  test.describe('Theme Persistence', () => {
    test('persists dark mode preference to localStorage', async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => localStorage.removeItem('theme'))
      await page.reload()

      // Should default to dark
      const theme = await page.evaluate(() => localStorage.getItem('theme'))
      expect(theme).toBe('dark')
    })

    test('persists light mode preference to localStorage', async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => localStorage.removeItem('theme'))
      await page.reload()

      // Switch to light
      await page.getByRole('button', { name: 'Switch to light mode' }).click()

      const theme = await page.evaluate(() => localStorage.getItem('theme'))
      expect(theme).toBe('light')
    })

    test('restores dark mode from localStorage on page load', async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => localStorage.setItem('theme', 'dark'))
      await page.reload()

      await expect(page.locator('html')).toHaveClass('dark')
      await expect(page.getByRole('button', { name: 'Switch to light mode' })).toBeVisible()
    })

    test('restores light mode from localStorage on page load', async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => localStorage.setItem('theme', 'light'))
      await page.reload()

      await expect(page.locator('html')).not.toHaveClass('dark')
      await expect(page.getByRole('button', { name: 'Switch to dark mode' })).toBeVisible()
    })

    test('theme persists across navigation', async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => localStorage.setItem('theme', 'light'))
      await page.reload()

      // Navigate to services
      await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click()
      await expect(page.locator('html')).not.toHaveClass('dark')

      // Navigate to impressum
      await page.getByRole('link', { name: 'Impressum' }).click()
      await expect(page.locator('html')).not.toHaveClass('dark')

      // Navigate to privacy
      await page.getByRole('link', { name: 'Privacy Policy' }).click()
      await expect(page.locator('html')).not.toHaveClass('dark')

      // Navigate back to home
      await page.getByRole('link', { name: 'Back to Home' }).click()
      await expect(page.locator('html')).not.toHaveClass('dark')
    })
  })

  test.describe('Data Theme Attribute', () => {
    test('sets data-theme attribute to dark in dark mode', async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => localStorage.setItem('theme', 'dark'))
      await page.reload()

      await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    })

    test('sets data-theme attribute to light in light mode', async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => localStorage.setItem('theme', 'light'))
      await page.reload()

      await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    })

    test('updates data-theme attribute when toggling', async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => localStorage.setItem('theme', 'dark'))
      await page.reload()

      await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')

      await page.getByRole('button', { name: 'Switch to light mode' }).click()

      await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    })
  })

  test.describe('Accessibility', () => {
    test('theme toggle button has accessible name', async ({ page }) => {
      await page.goto('/')

      const button = page.getByRole('button', { name: /Switch to (light|dark) mode/ })
      await expect(button).toBeVisible()
      await expect(button).toHaveAttribute('aria-label', /(Switch to light mode|Switch to dark mode)/)
    })

    test('theme toggle is keyboard accessible', async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => localStorage.setItem('theme', 'dark'))
      await page.reload()

      // Focus the theme toggle button directly and activate it
      const themeButton = page.getByRole('button', { name: 'Switch to light mode' })
      await themeButton.focus()
      await page.keyboard.press('Enter')

      // Should now be in light mode
      await expect(page.locator('html')).not.toHaveClass('dark')
    })
  })

  test.describe('Visual Consistency', () => {
    test('dark mode applies correct background', async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => localStorage.setItem('theme', 'dark'))
      await page.reload()

      // Check that dark class is on html element
      await expect(page.locator('html')).toHaveClass('dark')
    })

    test('light mode removes dark class', async ({ page }) => {
      await page.goto('/')
      await page.evaluate(() => localStorage.setItem('theme', 'light'))
      await page.reload()

      // Check that dark class is NOT on html element
      await expect(page.locator('html')).not.toHaveClass('dark')
    })

    test('theme works on all pages', async ({ page }) => {
      const pages = ['/', '/services', '/impressum', '/privacy']

      for (const path of pages) {
        await page.goto(path)
        await page.evaluate(() => localStorage.setItem('theme', 'dark'))
        await page.reload()
        await expect(page.locator('html')).toHaveClass('dark')

        await page.evaluate(() => localStorage.setItem('theme', 'light'))
        await page.reload()
        await expect(page.locator('html')).not.toHaveClass('dark')
      }
    })
  })
})
