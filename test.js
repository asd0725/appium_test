const wd = require("wd");
const assert = require("chai").assert;
const { describe, it } = require('mocha');

const driver = wd.promiseChainRemote({
    host: "http://10.0.19.196:4723/",
    port: 4723
});

describe("Sample Appium Test", function() {
    this.timeout(30000);

    before(async function() {
        // 连接到Appium Server
        await driver.init({
            platformName: "Android",
            deviceName: "172QJFAS222FT", // 替换为你的设备名称
            app: "/data/app/~~GF_8E1ktww_5YKAfC58vUg==/com.v5.newsk-ziGmm6abQ-5nPK9EgKqGJQ==/base.apk" // 替换为你的应用路径
        });
    });

    it("should open the app and perform a simple action", async function() {
        // 进行一些测试动作
        const element = await driver.elementById("your_element_id"); // 替换为元素的ID
        await element.click();

        // 进行断言
        const text = await element.text();
        assert.equal(text, "Expected Text");
    });

    after(async function() {
        // 关闭连接
        await driver.quit();
    });
});
