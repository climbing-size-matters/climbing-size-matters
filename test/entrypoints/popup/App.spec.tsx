import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fakeBrowser } from 'wxt/testing/fake-browser';
import App from '../../../src/entrypoints/popup/App';

describe('popup', () => {
  beforeEach(() => {
    fakeBrowser.reset();
  });

  afterEach(() => {
    cleanup();
  });

  it('shows an empty inventory on first open', async () => {
    render(<App />);

    // Waits for the saved inventory to finish loading
    expect(await screen.findByText('No gear saved yet')).toBeTruthy();
    expect(screen.queryByText('Black Diamond')).toBeNull();
  });

  it('saves gear and shows it in the inventory', async () => {
    const user = userEvent.setup();
    const { unmount } = render(<App />);

    await user.click(screen.getByRole('button', { name: 'Update Gear' }));
    await user.selectOptions(
      await screen.findByLabelText('Brand'),
      'Black Diamond'
    );
    await user.selectOptions(screen.getByLabelText('Model'), 'C4 (2019)');
    await user.click(screen.getByLabelText('#0.3'));
    await user.click(screen.getByLabelText('#1'));
    await user.click(screen.getByRole('button', { name: 'Save' }));

    // Back on the inventory, with the saved cams under their model
    await user.click(await screen.findByText('C4 (2019)'));
    expect(screen.getByText('#0.3')).toBeTruthy();
    expect(screen.getByText('#1')).toBeTruthy();
    expect(screen.queryByText('#2')).toBeNull();

    // Still there after reopening the popup
    unmount();
    render(<App />);
    expect(await screen.findByText('C4 (2019)')).toBeTruthy();
  });
});
