/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export {default as rendererVersion} from 'shared/ReactVersion.js';
export const rendererPackageName = 'react-server-dom-esm';

export * from 'react-client/src/ReactFlightClientStreamConfigWeb.js';
export * from 'react-client/src/ReactClientConsoleConfigBrowser.js';
export * from 'react-server-dom-esm/src/client/ReactFlightClientConfigBundlerESM.js';
export * from 'react-server-dom-esm/src/client/ReactFlightClientConfigTargetESMBrowser.js';
export * from 'react-dom-bindings/src/shared/ReactFlightClientConfigDOM.js';
export const usedWithSSR = false;
