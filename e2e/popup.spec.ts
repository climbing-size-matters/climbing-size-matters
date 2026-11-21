import { test, expect } from './fixtures';
import { database } from '../src/cam-database/database';

const c4Cams = database.cams.filter((cam) => cam.model_id === 'c4');

test('first open shows an empty inventory', async ({ popup }) => {
  await expect(popup.getByText('No gear saved yet')).toBeVisible();
});

test('saved gear shows in the inventory and persists', async ({ popup }) => {
  await popup.getByRole('button', { name: 'Update Gear' }).click();
  await popup.getByLabel('Brand').selectOption('Black Diamond');
  await popup.getByLabel('Model').selectOption('C4 (2019)');
  await popup.getByLabel('#0.3').check();
  await popup.getByLabel('#1').check();
  await popup.getByRole('button', { name: 'Save' }).click();

  await popup.getByText('C4 (2019)').click();
  await expect(popup.getByText('#0.3')).toBeVisible();
  await expect(popup.getByText('#1', { exact: true })).toBeVisible();

  await popup.reload();
  await popup.getByText('C4 (2019)').click();
  await expect(popup.getByText('#0.3')).toBeVisible();
  await expect(popup.getByText('#1', { exact: true })).toBeVisible();
});

// toBeInViewport also fails for items clipped by an inner scroll container
test('long inventory: every cam is visible', async ({ popup }) => {
  await popup.evaluate(
    (ids) => chrome.storage.local.set({ inventory: ids }),
    c4Cams.map((cam) => cam.id)
  );
  await popup.reload();
  await popup.getByText('C4 (2019)').click();

  for (const cam of c4Cams) {
    await expect(popup.getByText(cam.name, { exact: true })).toBeInViewport({
      ratio: 1,
    });
  }
});

test('long cam list: every checkbox and Save are visible', async ({
  popup,
}) => {
  await popup.getByRole('button', { name: 'Update Gear' }).click();
  await popup.getByLabel('Brand').selectOption('Black Diamond');
  await popup.getByLabel('Model').selectOption('C4 (2019)');

  await expect(popup.getByRole('checkbox')).toHaveCount(12);
  for (const checkbox of await popup.getByRole('checkbox').all()) {
    await expect(checkbox).toBeInViewport({ ratio: 1 });
  }
  await expect(popup.getByRole('button', { name: 'Save' })).toBeInViewport({
    ratio: 1,
  });
});
