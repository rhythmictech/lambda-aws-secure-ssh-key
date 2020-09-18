# lambda-aws-secure-template
Creates _something_ with a Lambda data source and saves it in a secrets manager secret, allowing the creation of _the thing_ without saving them in state

[![eslint](https://github.com/rhythmictech/lambda-aws-secure-template/workflows/eslint/badge.svg?branch=main&event=push)](https://github.com/rhythmictech/lambda-aws-secure-template/actions?query=workflow%3Aeslint+event%3Apush+branch%3Amain)
[![yamllint](https://github.com/rhythmictech/lambda-aws-secure-template/workflows/yamllint/badge.svg?branch=main&event=push)](https://github.com/rhythmictech/lambda-aws-secure-template/actions?query=workflow%3Ayamllint+event%3Apush+branch%3Amain)
[![misspell](https://github.com/rhythmictech/lambda-aws-secure-template/workflows/misspell/badge.svg?branch=main&event=push)](https://github.com/rhythmictech/lambda-aws-secure-template/actions?query=workflow%3Amisspell+event%3Apush+branch%3Amain)
[![pre-commit-check](https://github.com/rhythmictech/lambda-aws-secure-template/workflows/pre-commit-check/badge.svg?branch=main&event=push)](https://github.com/rhythmictech/lambda-aws-secure-template/actions?query=workflow%3Apre-commit-check+event%3Apush+branch%3Amain)
<a href="https://twitter.com/intent/follow?screen_name=RhythmicTech"><img src="https://img.shields.io/twitter/follow/RhythmicTech?style=social&logo=twitter" alt="follow on Twitter"></a>

## Example
Here's what using the module will look like
```hcl
module "example" {
  source = "rhythmictech/lambda-mycloud-mymodule
}
```

## The Giants Underneath this template
- [pre-commit.com](pre-commit.com)
- [lambda.io](lambda.io)
- [github.com/segmentio/lambda-docs](github.com/segmentio/lambda-docs)
