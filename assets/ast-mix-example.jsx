module.exports = {
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "id": {
            "type": "Identifier",
            "name": "React",
            "range": [
              7,
              12
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 12
              }
            }
          },
          "range": [
            7,
            12
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 7
            },
            "end": {
              "line": 1,
              "column": 12
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "id": {
            "type": "Identifier",
            "name": "Component",
            "range": [
              15,
              24
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 15
              },
              "end": {
                "line": 1,
                "column": 24
              }
            }
          },
          "name": null,
          "range": [
            15,
            24
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 15
            },
            "end": {
              "line": 1,
              "column": 24
            }
          }
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "range": [
          31,
          38
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 31
          },
          "end": {
            "line": 1,
            "column": 38
          }
        }
      },
      "importKind": "value",
      "range": [
        0,
        39
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 39
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "id": {
            "type": "Identifier",
            "name": "__",
            "range": [
              48,
              50
            ],
            "loc": {
              "start": {
                "line": 2,
                "column": 8
              },
              "end": {
                "line": 2,
                "column": 10
              }
            }
          },
          "name": null,
          "range": [
            48,
            50
          ],
          "loc": {
            "start": {
              "line": 2,
              "column": 8
            },
            "end": {
              "line": 2,
              "column": 10
            }
          }
        }
      ],
      "source": {
        "type": "Literal",
        "value": "i18n",
        "raw": "'i18n'",
        "range": [
          57,
          63
        ],
        "loc": {
          "start": {
            "line": 2,
            "column": 17
          },
          "end": {
            "line": 2,
            "column": 23
          }
        }
      },
      "importKind": "value",
      "range": [
        40,
        64
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 24
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "translate",
        "range": [
          75,
          84
        ],
        "loc": {
          "start": {
            "line": 4,
            "column": 9
          },
          "end": {
            "line": 4,
            "column": 18
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "name": "string",
          "range": [
            85,
            91
          ],
          "loc": {
            "start": {
              "line": 4,
              "column": 19
            },
            "end": {
              "line": 4,
              "column": 25
            }
          }
        }
      ],
      "defaults": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "string",
              "range": [
                103,
                109
              ],
              "loc": {
                "start": {
                  "line": 5,
                  "column": 9
                },
                "end": {
                  "line": 5,
                  "column": 15
                }
              }
            },
            "range": [
              96,
              110
            ],
            "loc": {
              "start": {
                "line": 5,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 16
              }
            }
          }
        ],
        "range": [
          92,
          112
        ],
        "loc": {
          "start": {
            "line": 4,
            "column": 26
          },
          "end": {
            "line": 6,
            "column": 1
          }
        }
      },
      "rest": null,
      "generator": false,
      "expression": false,
      "range": [
        66,
        112
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 0
        },
        "end": {
          "line": 6,
          "column": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "util",
            "range": [
              120,
              124
            ],
            "loc": {
              "start": {
                "line": 8,
                "column": 6
              },
              "end": {
                "line": 8,
                "column": 10
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "translateMethod",
                  "range": [
                    131,
                    146
                  ],
                  "loc": {
                    "start": {
                      "line": 9,
                      "column": 2
                    },
                    "end": {
                      "line": 9,
                      "column": 17
                    }
                  }
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "string",
                      "range": [
                        157,
                        163
                      ],
                      "loc": {
                        "start": {
                          "line": 9,
                          "column": 28
                        },
                        "end": {
                          "line": 9,
                          "column": 34
                        }
                      }
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "string",
                          "range": [
                            177,
                            183
                          ],
                          "loc": {
                            "start": {
                              "line": 10,
                              "column": 11
                            },
                            "end": {
                              "line": 10,
                              "column": 17
                            }
                          }
                        },
                        "range": [
                          170,
                          184
                        ],
                        "loc": {
                          "start": {
                            "line": 10,
                            "column": 4
                          },
                          "end": {
                            "line": 10,
                            "column": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      164,
                      188
                    ],
                    "loc": {
                      "start": {
                        "line": 9,
                        "column": 35
                      },
                      "end": {
                        "line": 11,
                        "column": 3
                      }
                    }
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false,
                  "range": [
                    148,
                    188
                  ],
                  "loc": {
                    "start": {
                      "line": 9,
                      "column": 19
                    },
                    "end": {
                      "line": 11,
                      "column": 3
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "shorthand": false,
                "computed": false,
                "range": [
                  131,
                  188
                ],
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 2
                  },
                  "end": {
                    "line": 11,
                    "column": 3
                  }
                }
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "notGettext",
                  "range": [
                    192,
                    202
                  ],
                  "loc": {
                    "start": {
                      "line": 12,
                      "column": 2
                    },
                    "end": {
                      "line": 12,
                      "column": 12
                    }
                  }
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "string",
                      "range": [
                        213,
                        219
                      ],
                      "loc": {
                        "start": {
                          "line": 12,
                          "column": 23
                        },
                        "end": {
                          "line": 12,
                          "column": 29
                        }
                      }
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "not",
                          "raw": "'not'",
                          "range": [
                            233,
                            238
                          ],
                          "loc": {
                            "start": {
                              "line": 13,
                              "column": 11
                            },
                            "end": {
                              "line": 13,
                              "column": 16
                            }
                          }
                        },
                        "range": [
                          226,
                          239
                        ],
                        "loc": {
                          "start": {
                            "line": 13,
                            "column": 4
                          },
                          "end": {
                            "line": 13,
                            "column": 17
                          }
                        }
                      }
                    ],
                    "range": [
                      220,
                      243
                    ],
                    "loc": {
                      "start": {
                        "line": 12,
                        "column": 30
                      },
                      "end": {
                        "line": 14,
                        "column": 3
                      }
                    }
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false,
                  "range": [
                    204,
                    243
                  ],
                  "loc": {
                    "start": {
                      "line": 12,
                      "column": 14
                    },
                    "end": {
                      "line": 14,
                      "column": 3
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "shorthand": false,
                "computed": false,
                "range": [
                  192,
                  243
                ],
                "loc": {
                  "start": {
                    "line": 12,
                    "column": 2
                  },
                  "end": {
                    "line": 14,
                    "column": 3
                  }
                }
              }
            ],
            "range": [
              127,
              245
            ],
            "loc": {
              "start": {
                "line": 8,
                "column": 13
              },
              "end": {
                "line": 15,
                "column": 1
              }
            }
          },
          "range": [
            120,
            245
          ],
          "loc": {
            "start": {
              "line": 8,
              "column": 6
            },
            "end": {
              "line": 15,
              "column": 1
            }
          }
        }
      ],
      "kind": "const",
      "range": [
        114,
        245
      ],
      "loc": {
        "start": {
          "line": 8,
          "column": 0
        },
        "end": {
          "line": 15,
          "column": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "translated",
            "range": [
              253,
              263
            ],
            "loc": {
              "start": {
                "line": 17,
                "column": 6
              },
              "end": {
                "line": 17,
                "column": 16
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "util",
                "range": [
                  266,
                  270
                ],
                "loc": {
                  "start": {
                    "line": 17,
                    "column": 19
                  },
                  "end": {
                    "line": 17,
                    "column": 23
                  }
                }
              },
              "property": {
                "type": "Identifier",
                "name": "translateMethod",
                "range": [
                  271,
                  286
                ],
                "loc": {
                  "start": {
                    "line": 17,
                    "column": 24
                  },
                  "end": {
                    "line": 17,
                    "column": 39
                  }
                }
              },
              "range": [
                266,
                286
              ],
              "loc": {
                "start": {
                  "line": 17,
                  "column": 19
                },
                "end": {
                  "line": 17,
                  "column": 39
                }
              }
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "how are you",
                "raw": "'how are you'",
                "range": [
                  287,
                  300
                ],
                "loc": {
                  "start": {
                    "line": 17,
                    "column": 40
                  },
                  "end": {
                    "line": 17,
                    "column": 53
                  }
                }
              }
            ],
            "range": [
              266,
              301
            ],
            "loc": {
              "start": {
                "line": 17,
                "column": 19
              },
              "end": {
                "line": 17,
                "column": 54
              }
            }
          },
          "range": [
            253,
            301
          ],
          "loc": {
            "start": {
              "line": 17,
              "column": 6
            },
            "end": {
              "line": 17,
              "column": 54
            }
          }
        }
      ],
      "kind": "const",
      "range": [
        247,
        302
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 0
        },
        "end": {
          "line": 17,
          "column": 55
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "util",
            "range": [
              303,
              307
            ],
            "loc": {
              "start": {
                "line": 18,
                "column": 0
              },
              "end": {
                "line": 18,
                "column": 4
              }
            }
          },
          "property": {
            "type": "Identifier",
            "name": "notGettext",
            "range": [
              308,
              318
            ],
            "loc": {
              "start": {
                "line": 18,
                "column": 5
              },
              "end": {
                "line": 18,
                "column": 15
              }
            }
          },
          "range": [
            303,
            318
          ],
          "loc": {
            "start": {
              "line": 18,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 15
            }
          }
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "'hello'",
            "range": [
              319,
              326
            ],
            "loc": {
              "start": {
                "line": 18,
                "column": 16
              },
              "end": {
                "line": 18,
                "column": 23
              }
            }
          }
        ],
        "range": [
          303,
          327
        ],
        "loc": {
          "start": {
            "line": 18,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 24
          }
        }
      },
      "range": [
        303,
        328
      ],
      "loc": {
        "start": {
          "line": 18,
          "column": 0
        },
        "end": {
          "line": 18,
          "column": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "params": [],
          "defaults": [],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "__",
                    "range": [
                      345,
                      347
                    ],
                    "loc": {
                      "start": {
                        "line": 21,
                        "column": 2
                      },
                      "end": {
                        "line": 21,
                        "column": 4
                      }
                    }
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "can you catch this?",
                      "raw": "'can you catch this?'",
                      "range": [
                        348,
                        369
                      ],
                      "loc": {
                        "start": {
                          "line": 21,
                          "column": 5
                        },
                        "end": {
                          "line": 21,
                          "column": 26
                        }
                      }
                    }
                  ],
                  "range": [
                    345,
                    370
                  ],
                  "loc": {
                    "start": {
                      "line": 21,
                      "column": 2
                    },
                    "end": {
                      "line": 21,
                      "column": 27
                    }
                  }
                },
                "range": [
                  345,
                  371
                ],
                "loc": {
                  "start": {
                    "line": 21,
                    "column": 2
                  },
                  "end": {
                    "line": 21,
                    "column": 28
                  }
                }
              }
            ],
            "range": [
              341,
              373
            ],
            "loc": {
              "start": {
                "line": 20,
                "column": 11
              },
              "end": {
                "line": 22,
                "column": 1
              }
            }
          },
          "rest": null,
          "generator": false,
          "expression": false,
          "range": [
            331,
            373
          ],
          "loc": {
            "start": {
              "line": 20,
              "column": 1
            },
            "end": {
              "line": 22,
              "column": 1
            }
          }
        },
        "arguments": [],
        "range": [
          330,
          376
        ],
        "loc": {
          "start": {
            "line": 20,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 4
          }
        }
      },
      "range": [
        330,
        376
      ],
      "loc": {
        "start": {
          "line": 20,
          "column": 0
        },
        "end": {
          "line": 22,
          "column": 4
        }
      }
    },
    {
      "type": "ExportDeclaration",
      "default": true,
      "declaration": {
        "type": "ClassDeclaration",
        "id": {
          "type": "Identifier",
          "name": "Example",
          "range": [
            399,
            406
          ],
          "loc": {
            "start": {
              "line": 24,
              "column": 21
            },
            "end": {
              "line": 24,
              "column": 28
            }
          }
        },
        "superClass": {
          "type": "Identifier",
          "name": "Component",
          "range": [
            415,
            424
          ],
          "loc": {
            "start": {
              "line": 24,
              "column": 37
            },
            "end": {
              "line": 24,
              "column": 46
            }
          }
        },
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "key": {
                "type": "Identifier",
                "name": "render",
                "range": [
                  429,
                  435
                ],
                "loc": {
                  "start": {
                    "line": 25,
                    "column": 2
                  },
                  "end": {
                    "line": 25,
                    "column": 8
                  }
                }
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "params": [],
                "defaults": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "translate",
                          "range": [
                            443,
                            452
                          ],
                          "loc": {
                            "start": {
                              "line": 26,
                              "column": 4
                            },
                            "end": {
                              "line": 26,
                              "column": 13
                            }
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "bob",
                            "raw": "'bob'",
                            "range": [
                              453,
                              458
                            ],
                            "loc": {
                              "start": {
                                "line": 26,
                                "column": 14
                              },
                              "end": {
                                "line": 26,
                                "column": 19
                              }
                            }
                          }
                        ],
                        "range": [
                          443,
                          459
                        ],
                        "loc": {
                          "start": {
                            "line": 26,
                            "column": 4
                          },
                          "end": {
                            "line": 26,
                            "column": 20
                          }
                        }
                      },
                      "range": [
                        443,
                        460
                      ],
                      "loc": {
                        "start": {
                          "line": 26,
                          "column": 4
                        },
                        "end": {
                          "line": 26,
                          "column": 21
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "div",
                            "range": [
                              481,
                              484
                            ],
                            "loc": {
                              "start": {
                                "line": 28,
                                "column": 7
                              },
                              "end": {
                                "line": 28,
                                "column": 10
                              }
                            }
                          },
                          "selfClosing": false,
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "className",
                                "range": [
                                  485,
                                  494
                                ],
                                "loc": {
                                  "start": {
                                    "line": 28,
                                    "column": 11
                                  },
                                  "end": {
                                    "line": 28,
                                    "column": 20
                                  }
                                }
                              },
                              "value": {
                                "type": "Literal",
                                "value": "container",
                                "raw": "'container'",
                                "range": [
                                  495,
                                  506
                                ],
                                "loc": {
                                  "start": {
                                    "line": 28,
                                    "column": 21
                                  },
                                  "end": {
                                    "line": 28,
                                    "column": 32
                                  }
                                }
                              },
                              "range": [
                                485,
                                506
                              ],
                              "loc": {
                                "start": {
                                  "line": 28,
                                  "column": 11
                                },
                                "end": {
                                  "line": 28,
                                  "column": 32
                                }
                              }
                            }
                          ],
                          "range": [
                            480,
                            507
                          ],
                          "loc": {
                            "start": {
                              "line": 28,
                              "column": 6
                            },
                            "end": {
                              "line": 28,
                              "column": 33
                            }
                          }
                        },
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "div",
                            "range": [
                              816,
                              819
                            ],
                            "loc": {
                              "start": {
                                "line": 37,
                                "column": 8
                              },
                              "end": {
                                "line": 37,
                                "column": 11
                              }
                            }
                          },
                          "range": [
                            814,
                            820
                          ],
                          "loc": {
                            "start": {
                              "line": 37,
                              "column": 6
                            },
                            "end": {
                              "line": 37,
                              "column": 12
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "Literal",
                            "value": "\n        ",
                            "raw": "\n        ",
                            "range": [
                              507,
                              516
                            ],
                            "loc": {
                              "start": {
                                "line": 28,
                                "column": 33
                              },
                              "end": {
                                "line": 29,
                                "column": 8
                              }
                            }
                          },
                          {
                            "type": "JSXElement",
                            "openingElement": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "div",
                                "range": [
                                  517,
                                  520
                                ],
                                "loc": {
                                  "start": {
                                    "line": 29,
                                    "column": 9
                                  },
                                  "end": {
                                    "line": 29,
                                    "column": 12
                                  }
                                }
                              },
                              "selfClosing": false,
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "className",
                                    "range": [
                                      521,
                                      530
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 29,
                                        "column": 13
                                      },
                                      "end": {
                                        "line": 29,
                                        "column": 22
                                      }
                                    }
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "top",
                                    "raw": "'top'",
                                    "range": [
                                      531,
                                      536
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 29,
                                        "column": 23
                                      },
                                      "end": {
                                        "line": 29,
                                        "column": 28
                                      }
                                    }
                                  },
                                  "range": [
                                    521,
                                    536
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 29,
                                      "column": 13
                                    },
                                    "end": {
                                      "line": 29,
                                      "column": 28
                                    }
                                  }
                                }
                              ],
                              "range": [
                                516,
                                537
                              ],
                              "loc": {
                                "start": {
                                  "line": 29,
                                  "column": 8
                                },
                                "end": {
                                  "line": 29,
                                  "column": 29
                                }
                              }
                            },
                            "closingElement": {
                              "type": "JSXClosingElement",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "div",
                                "range": [
                                  699,
                                  702
                                ],
                                "loc": {
                                  "start": {
                                    "line": 33,
                                    "column": 10
                                  },
                                  "end": {
                                    "line": 33,
                                    "column": 13
                                  }
                                }
                              },
                              "range": [
                                697,
                                703
                              ],
                              "loc": {
                                "start": {
                                  "line": 33,
                                  "column": 8
                                },
                                "end": {
                                  "line": 33,
                                  "column": 14
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "Literal",
                                "value": "\n          ",
                                "raw": "\n          ",
                                "range": [
                                  537,
                                  548
                                ],
                                "loc": {
                                  "start": {
                                    "line": 29,
                                    "column": 29
                                  },
                                  "end": {
                                    "line": 30,
                                    "column": 10
                                  }
                                }
                              },
                              {
                                "type": "JSXElement",
                                "openingElement": {
                                  "type": "JSXOpeningElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "p",
                                    "range": [
                                      549,
                                      550
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 30,
                                        "column": 11
                                      },
                                      "end": {
                                        "line": 30,
                                        "column": 12
                                      }
                                    }
                                  },
                                  "selfClosing": false,
                                  "attributes": [],
                                  "range": [
                                    548,
                                    551
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 30,
                                      "column": 10
                                    },
                                    "end": {
                                      "line": 30,
                                      "column": 13
                                    }
                                  }
                                },
                                "closingElement": {
                                  "type": "JSXClosingElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "p",
                                    "range": [
                                      570,
                                      571
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 30,
                                        "column": 32
                                      },
                                      "end": {
                                        "line": 30,
                                        "column": 33
                                      }
                                    }
                                  },
                                  "range": [
                                    568,
                                    572
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 30,
                                      "column": 30
                                    },
                                    "end": {
                                      "line": 30,
                                      "column": 34
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "JSXExpressionContainer",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "range": [
                                            552,
                                            556
                                          ],
                                          "loc": {
                                            "start": {
                                              "line": 30,
                                              "column": 14
                                            },
                                            "end": {
                                              "line": 30,
                                              "column": 18
                                            }
                                          }
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "props",
                                          "range": [
                                            557,
                                            562
                                          ],
                                          "loc": {
                                            "start": {
                                              "line": 30,
                                              "column": 19
                                            },
                                            "end": {
                                              "line": 30,
                                              "column": 24
                                            }
                                          }
                                        },
                                        "range": [
                                          552,
                                          562
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 30,
                                            "column": 14
                                          },
                                          "end": {
                                            "line": 30,
                                            "column": 24
                                          }
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "text",
                                        "range": [
                                          563,
                                          567
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 30,
                                            "column": 25
                                          },
                                          "end": {
                                            "line": 30,
                                            "column": 29
                                          }
                                        }
                                      },
                                      "range": [
                                        552,
                                        567
                                      ],
                                      "loc": {
                                        "start": {
                                          "line": 30,
                                          "column": 14
                                        },
                                        "end": {
                                          "line": 30,
                                          "column": 29
                                        }
                                      }
                                    },
                                    "range": [
                                      551,
                                      568
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 30,
                                        "column": 13
                                      },
                                      "end": {
                                        "line": 30,
                                        "column": 30
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  548,
                                  572
                                ],
                                "loc": {
                                  "start": {
                                    "line": 30,
                                    "column": 10
                                  },
                                  "end": {
                                    "line": 30,
                                    "column": 34
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "value": "\n          ",
                                "raw": "\n          ",
                                "range": [
                                  572,
                                  583
                                ],
                                "loc": {
                                  "start": {
                                    "line": 30,
                                    "column": 34
                                  },
                                  "end": {
                                    "line": 31,
                                    "column": 10
                                  }
                                }
                              },
                              {
                                "type": "JSXElement",
                                "openingElement": {
                                  "type": "JSXOpeningElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "p",
                                    "range": [
                                      584,
                                      585
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 31,
                                        "column": 11
                                      },
                                      "end": {
                                        "line": 31,
                                        "column": 12
                                      }
                                    }
                                  },
                                  "selfClosing": false,
                                  "attributes": [],
                                  "range": [
                                    583,
                                    586
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 31,
                                      "column": 10
                                    },
                                    "end": {
                                      "line": 31,
                                      "column": 13
                                    }
                                  }
                                },
                                "closingElement": {
                                  "type": "JSXClosingElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "p",
                                    "range": [
                                      633,
                                      634
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 31,
                                        "column": 60
                                      },
                                      "end": {
                                        "line": 31,
                                        "column": 61
                                      }
                                    }
                                  },
                                  "range": [
                                    631,
                                    635
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 31,
                                      "column": 58
                                    },
                                    "end": {
                                      "line": 31,
                                      "column": 62
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "JSXExpressionContainer",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "util",
                                          "range": [
                                            587,
                                            591
                                          ],
                                          "loc": {
                                            "start": {
                                              "line": 31,
                                              "column": 14
                                            },
                                            "end": {
                                              "line": 31,
                                              "column": 18
                                            }
                                          }
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "translateMethod",
                                          "range": [
                                            592,
                                            607
                                          ],
                                          "loc": {
                                            "start": {
                                              "line": 31,
                                              "column": 19
                                            },
                                            "end": {
                                              "line": 31,
                                              "column": 34
                                            }
                                          }
                                        },
                                        "range": [
                                          587,
                                          607
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 31,
                                            "column": 14
                                          },
                                          "end": {
                                            "line": 31,
                                            "column": 34
                                          }
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": "another translation",
                                          "raw": "'another translation'",
                                          "range": [
                                            608,
                                            629
                                          ],
                                          "loc": {
                                            "start": {
                                              "line": 31,
                                              "column": 35
                                            },
                                            "end": {
                                              "line": 31,
                                              "column": 56
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        587,
                                        630
                                      ],
                                      "loc": {
                                        "start": {
                                          "line": 31,
                                          "column": 14
                                        },
                                        "end": {
                                          "line": 31,
                                          "column": 57
                                        }
                                      }
                                    },
                                    "range": [
                                      586,
                                      631
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 31,
                                        "column": 13
                                      },
                                      "end": {
                                        "line": 31,
                                        "column": 58
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  583,
                                  635
                                ],
                                "loc": {
                                  "start": {
                                    "line": 31,
                                    "column": 10
                                  },
                                  "end": {
                                    "line": 31,
                                    "column": 62
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "value": "\n          ",
                                "raw": "\n          ",
                                "range": [
                                  635,
                                  646
                                ],
                                "loc": {
                                  "start": {
                                    "line": 31,
                                    "column": 62
                                  },
                                  "end": {
                                    "line": 32,
                                    "column": 10
                                  }
                                }
                              },
                              {
                                "type": "JSXElement",
                                "openingElement": {
                                  "type": "JSXOpeningElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "p",
                                    "range": [
                                      647,
                                      648
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 32,
                                        "column": 11
                                      },
                                      "end": {
                                        "line": 32,
                                        "column": 12
                                      }
                                    }
                                  },
                                  "selfClosing": false,
                                  "attributes": [],
                                  "range": [
                                    646,
                                    649
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 32,
                                      "column": 10
                                    },
                                    "end": {
                                      "line": 32,
                                      "column": 13
                                    }
                                  }
                                },
                                "closingElement": {
                                  "type": "JSXClosingElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "p",
                                    "range": [
                                      686,
                                      687
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 32,
                                        "column": 50
                                      },
                                      "end": {
                                        "line": 32,
                                        "column": 51
                                      }
                                    }
                                  },
                                  "range": [
                                    684,
                                    688
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 32,
                                      "column": 48
                                    },
                                    "end": {
                                      "line": 32,
                                      "column": 52
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "JSXExpressionContainer",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "name": "__",
                                        "range": [
                                          650,
                                          652
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 32,
                                            "column": 14
                                          },
                                          "end": {
                                            "line": 32,
                                            "column": 16
                                          }
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Literal",
                                          "value": "hello this is a translation",
                                          "raw": "'hello this is a translation'",
                                          "range": [
                                            653,
                                            682
                                          ],
                                          "loc": {
                                            "start": {
                                              "line": 32,
                                              "column": 17
                                            },
                                            "end": {
                                              "line": 32,
                                              "column": 46
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        650,
                                        683
                                      ],
                                      "loc": {
                                        "start": {
                                          "line": 32,
                                          "column": 14
                                        },
                                        "end": {
                                          "line": 32,
                                          "column": 47
                                        }
                                      }
                                    },
                                    "range": [
                                      649,
                                      684
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 32,
                                        "column": 13
                                      },
                                      "end": {
                                        "line": 32,
                                        "column": 48
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  646,
                                  688
                                ],
                                "loc": {
                                  "start": {
                                    "line": 32,
                                    "column": 10
                                  },
                                  "end": {
                                    "line": 32,
                                    "column": 52
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "value": "\n        ",
                                "raw": "\n        ",
                                "range": [
                                  688,
                                  697
                                ],
                                "loc": {
                                  "start": {
                                    "line": 32,
                                    "column": 52
                                  },
                                  "end": {
                                    "line": 33,
                                    "column": 8
                                  }
                                }
                              }
                            ],
                            "range": [
                              516,
                              703
                            ],
                            "loc": {
                              "start": {
                                "line": 29,
                                "column": 8
                              },
                              "end": {
                                "line": 33,
                                "column": 14
                              }
                            }
                          },
                          {
                            "type": "Literal",
                            "value": "\n        ",
                            "raw": "\n        ",
                            "range": [
                              703,
                              712
                            ],
                            "loc": {
                              "start": {
                                "line": 33,
                                "column": 14
                              },
                              "end": {
                                "line": 34,
                                "column": 8
                              }
                            }
                          },
                          {
                            "type": "JSXElement",
                            "openingElement": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "form",
                                "range": [
                                  713,
                                  717
                                ],
                                "loc": {
                                  "start": {
                                    "line": 34,
                                    "column": 9
                                  },
                                  "end": {
                                    "line": 34,
                                    "column": 13
                                  }
                                }
                              },
                              "selfClosing": false,
                              "attributes": [],
                              "range": [
                                712,
                                718
                              ],
                              "loc": {
                                "start": {
                                  "line": 34,
                                  "column": 8
                                },
                                "end": {
                                  "line": 34,
                                  "column": 14
                                }
                              }
                            },
                            "closingElement": {
                              "type": "JSXClosingElement",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "form",
                                "range": [
                                  802,
                                  806
                                ],
                                "loc": {
                                  "start": {
                                    "line": 36,
                                    "column": 10
                                  },
                                  "end": {
                                    "line": 36,
                                    "column": 14
                                  }
                                }
                              },
                              "range": [
                                800,
                                807
                              ],
                              "loc": {
                                "start": {
                                  "line": 36,
                                  "column": 8
                                },
                                "end": {
                                  "line": 36,
                                  "column": 15
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "Literal",
                                "value": "\n          ",
                                "raw": "\n          ",
                                "range": [
                                  718,
                                  729
                                ],
                                "loc": {
                                  "start": {
                                    "line": 34,
                                    "column": 14
                                  },
                                  "end": {
                                    "line": 35,
                                    "column": 10
                                  }
                                }
                              },
                              {
                                "type": "JSXElement",
                                "openingElement": {
                                  "type": "JSXOpeningElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "input",
                                    "range": [
                                      730,
                                      735
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 35,
                                        "column": 11
                                      },
                                      "end": {
                                        "line": 35,
                                        "column": 16
                                      }
                                    }
                                  },
                                  "selfClosing": true,
                                  "attributes": [
                                    {
                                      "type": "JSXAttribute",
                                      "name": {
                                        "type": "JSXIdentifier",
                                        "name": "type",
                                        "range": [
                                          736,
                                          740
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 35,
                                            "column": 17
                                          },
                                          "end": {
                                            "line": 35,
                                            "column": 21
                                          }
                                        }
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": "text",
                                        "raw": "'text'",
                                        "range": [
                                          741,
                                          747
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 35,
                                            "column": 22
                                          },
                                          "end": {
                                            "line": 35,
                                            "column": 28
                                          }
                                        }
                                      },
                                      "range": [
                                        736,
                                        747
                                      ],
                                      "loc": {
                                        "start": {
                                          "line": 35,
                                          "column": 17
                                        },
                                        "end": {
                                          "line": 35,
                                          "column": 28
                                        }
                                      }
                                    },
                                    {
                                      "type": "JSXAttribute",
                                      "name": {
                                        "type": "JSXIdentifier",
                                        "name": "placeholder",
                                        "range": [
                                          748,
                                          759
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 35,
                                            "column": 29
                                          },
                                          "end": {
                                            "line": 35,
                                            "column": 40
                                          }
                                        }
                                      },
                                      "value": {
                                        "type": "JSXExpressionContainer",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": "__",
                                            "range": [
                                              761,
                                              763
                                            ],
                                            "loc": {
                                              "start": {
                                                "line": 35,
                                                "column": 42
                                              },
                                              "end": {
                                                "line": 35,
                                                "column": 44
                                              }
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "value": "this is a placeholder",
                                              "raw": "'this is a placeholder'",
                                              "range": [
                                                764,
                                                787
                                              ],
                                              "loc": {
                                                "start": {
                                                  "line": 35,
                                                  "column": 45
                                                },
                                                "end": {
                                                  "line": 35,
                                                  "column": 68
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            761,
                                            788
                                          ],
                                          "loc": {
                                            "start": {
                                              "line": 35,
                                              "column": 42
                                            },
                                            "end": {
                                              "line": 35,
                                              "column": 69
                                            }
                                          }
                                        },
                                        "range": [
                                          760,
                                          789
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 35,
                                            "column": 41
                                          },
                                          "end": {
                                            "line": 35,
                                            "column": 70
                                          }
                                        }
                                      },
                                      "range": [
                                        748,
                                        789
                                      ],
                                      "loc": {
                                        "start": {
                                          "line": 35,
                                          "column": 29
                                        },
                                        "end": {
                                          "line": 35,
                                          "column": 70
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    729,
                                    791
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 35,
                                      "column": 10
                                    },
                                    "end": {
                                      "line": 35,
                                      "column": 72
                                    }
                                  }
                                },
                                "closingElement": null,
                                "children": [],
                                "range": [
                                  729,
                                  791
                                ],
                                "loc": {
                                  "start": {
                                    "line": 35,
                                    "column": 10
                                  },
                                  "end": {
                                    "line": 35,
                                    "column": 72
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "value": "\n        ",
                                "raw": "\n        ",
                                "range": [
                                  791,
                                  800
                                ],
                                "loc": {
                                  "start": {
                                    "line": 35,
                                    "column": 72
                                  },
                                  "end": {
                                    "line": 36,
                                    "column": 8
                                  }
                                }
                              }
                            ],
                            "range": [
                              712,
                              807
                            ],
                            "loc": {
                              "start": {
                                "line": 34,
                                "column": 8
                              },
                              "end": {
                                "line": 36,
                                "column": 15
                              }
                            }
                          },
                          {
                            "type": "Literal",
                            "value": "\n      ",
                            "raw": "\n      ",
                            "range": [
                              807,
                              814
                            ],
                            "loc": {
                              "start": {
                                "line": 36,
                                "column": 15
                              },
                              "end": {
                                "line": 37,
                                "column": 6
                              }
                            }
                          }
                        ],
                        "range": [
                          480,
                          820
                        ],
                        "loc": {
                          "start": {
                            "line": 28,
                            "column": 6
                          },
                          "end": {
                            "line": 37,
                            "column": 12
                          }
                        }
                      },
                      "range": [
                        465,
                        826
                      ],
                      "loc": {
                        "start": {
                          "line": 27,
                          "column": 4
                        },
                        "end": {
                          "line": 38,
                          "column": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    437,
                    830
                  ],
                  "loc": {
                    "start": {
                      "line": 25,
                      "column": 10
                    },
                    "end": {
                      "line": 39,
                      "column": 3
                    }
                  }
                },
                "rest": null,
                "generator": false,
                "expression": false,
                "range": [
                  437,
                  830
                ],
                "loc": {
                  "start": {
                    "line": 25,
                    "column": 10
                  },
                  "end": {
                    "line": 39,
                    "column": 3
                  }
                }
              },
              "kind": "",
              "static": false,
              "computed": false,
              "range": [
                429,
                830
              ],
              "loc": {
                "start": {
                  "line": 25,
                  "column": 2
                },
                "end": {
                  "line": 39,
                  "column": 3
                }
              }
            }
          ],
          "range": [
            425,
            832
          ],
          "loc": {
            "start": {
              "line": 24,
              "column": 47
            },
            "end": {
              "line": 40,
              "column": 1
            }
          }
        },
        "range": [
          393,
          832
        ],
        "loc": {
          "start": {
            "line": 24,
            "column": 15
          },
          "end": {
            "line": 40,
            "column": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "Identifier",
          "name": "Example",
          "range": [
            399,
            406
          ],
          "loc": {
            "start": {
              "line": 24,
              "column": 21
            },
            "end": {
              "line": 24,
              "column": 28
            }
          }
        }
      ],
      "source": null,
      "exportKind": "value",
      "range": [
        378,
        832
      ],
      "loc": {
        "start": {
          "line": 24,
          "column": 0
        },
        "end": {
          "line": 40,
          "column": 1
        }
      }
    }
  ],
  "range": [
    0,
    832
  ],
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 40,
      "column": 1
    }
  },
  "errors": [
    {
      "index": 0,
      "lineNumber": 1,
      "column": 1,
      "description": "Illegal import declaration"
    },
    {
      "index": 39,
      "lineNumber": 1,
      "column": 40,
      "description": "Illegal import declaration"
    },
    {
      "index": 376,
      "lineNumber": 22,
      "column": 5,
      "description": "Illegal export declaration"
    }
  ]
}