[Node Version Badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[Download Node.js]: https://nodejs.org/en/download/
[PRs Welcome Badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat

# cancelOrContinue()

> 拦停命令行会话，以选择中断或继续当前会话。

## 使用

- 返回 {Promise} 在命令行接收到输入信号时释放，或当用户输入的是 `ctrl + c` 快捷键时，终止命令行会话。

```js
import { log } from "console";
import cancelOrContinue from "@iyowei/cli-cancel-or-continue";

(async () => {
  log("按 [ctrl + c] 终止，或按其它 [任意] 键继续...");
  await cancelOrPressAnyKeyToContinue();

  log("结束");
})();
```

## 安装

[![Node Version Badge][Node Version Badge]][Download Node.js]

```shell
# Pnpm
pnpm add @iyowei/cli-cancel-or-continue

# yarn
yarn add @iyowei/cli-cancel-or-continue

# npm
npm add @iyowei/cli-cancel-or-continue
```

## 参与贡献

![PRs Welcome][PRs Welcome Badge]
