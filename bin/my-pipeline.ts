#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { MyPipelineStack } from "../lib/my-pipeline-stack";

const app = new cdk.App();
new MyPipelineStack(app, "MyPipelineStack", {
  env: {
    account: "863529805524",
    region: "us-west-2",
  },
});

app.synth();
