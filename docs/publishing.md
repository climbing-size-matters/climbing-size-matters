## How to Publish

Currently we are only planning on publishing as a Chrome* web extension.

## Chromium-based browsers

### Generating a Zip File

We have a script for this: `pnpm zip-chrome`. This uses `zip` to create a zip archive
in `dist/chrome`.

### Publishing the Extension

#### Setup / Pre-requisites

To enable all contributors to publish, we have a
- `climbing-size-matters` Google group
- Chrome Web Store group publisher syncing to that Google Group

In order to publish, you'll need to
1. Join the Google Group: https://groups.google.com/g/climbing-size-matters/join
2. Register a Chrome Web Store developer account (see [Chrome developer docs](https://developer.chrome.com/docs/webstore/register))
    - Note: this does incur a one-time $5 fee

#### Publish Manually
Follow the docs for [how to publish](https://developer.chrome.com/docs/webstore/publish).

Currently we have uploaded an item under the Climbing Size Matters group publisher:
[item for Climbing Size Matters](https://chrome.google.com/webstore/devconsole/15d04cac-676d-48b9-a97d-9d57e9a55cbf/igeaonjjikppbfcchekinmlhfehfcepp/edit/status).
It needs to go through review after it gets submitted.

#### Publish Automatically
This currently isn't set up yet, but we have set up the pre-requisites.

We have a GCP project with the [Chrome Web Store API enabled](https://console.cloud.google.com/apis/api/chromewebstore.googleapis.com/metrics?project=climbing-size-matters).
Eventually we will want to automate the publication in a CD pipeline using the
[Chrome Web Store Publish API](https://developer.chrome.com/docs/webstore/using-api).
