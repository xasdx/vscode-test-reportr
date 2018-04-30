let vscode = require("vscode")

exports.activate = ctx => {
  let disposable = vscode.commands.registerCommand("extension.runTests", () => {
    vscode.window.showInformationMessage("Running tests")
    let workspaceConfig = vscode.workspace.getConfiguration()
    let task = workspaceConfig.tasks.tasks[0]
    // let taskResult = new vscode.Task(task, "Test run task")
    // console.log(taskResult)
  })
  ctx.subscriptions.push(disposable)
}

exports.deactivate = () => { }
