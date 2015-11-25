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
      "type": "ExportDeclaration",
      "default": true,
      "declaration": {
        "type": "ClassDeclaration",
        "id": {
          "type": "Identifier",
          "name": "Example",
          "range": [
            87,
            94
          ],
          "loc": {
            "start": {
              "line": 4,
              "column": 21
            },
            "end": {
              "line": 4,
              "column": 28
            }
          }
        },
        "superClass": {
          "type": "Identifier",
          "name": "Component",
          "range": [
            103,
            112
          ],
          "loc": {
            "start": {
              "line": 4,
              "column": 37
            },
            "end": {
              "line": 4,
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
                  117,
                  123
                ],
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 2
                  },
                  "end": {
                    "line": 5,
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "JSXElement",
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "div",
                            "range": [
                              147,
                              150
                            ],
                            "loc": {
                              "start": {
                                "line": 7,
                                "column": 7
                              },
                              "end": {
                                "line": 7,
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
                                  151,
                                  160
                                ],
                                "loc": {
                                  "start": {
                                    "line": 7,
                                    "column": 11
                                  },
                                  "end": {
                                    "line": 7,
                                    "column": 20
                                  }
                                }
                              },
                              "value": {
                                "type": "Literal",
                                "value": "container",
                                "raw": "'container'",
                                "range": [
                                  161,
                                  172
                                ],
                                "loc": {
                                  "start": {
                                    "line": 7,
                                    "column": 21
                                  },
                                  "end": {
                                    "line": 7,
                                    "column": 32
                                  }
                                }
                              },
                              "range": [
                                151,
                                172
                              ],
                              "loc": {
                                "start": {
                                  "line": 7,
                                  "column": 11
                                },
                                "end": {
                                  "line": 7,
                                  "column": 32
                                }
                              }
                            }
                          ],
                          "range": [
                            146,
                            173
                          ],
                          "loc": {
                            "start": {
                              "line": 7,
                              "column": 6
                            },
                            "end": {
                              "line": 7,
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
                              419,
                              422
                            ],
                            "loc": {
                              "start": {
                                "line": 15,
                                "column": 8
                              },
                              "end": {
                                "line": 15,
                                "column": 11
                              }
                            }
                          },
                          "range": [
                            417,
                            423
                          ],
                          "loc": {
                            "start": {
                              "line": 15,
                              "column": 6
                            },
                            "end": {
                              "line": 15,
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
                              173,
                              182
                            ],
                            "loc": {
                              "start": {
                                "line": 7,
                                "column": 33
                              },
                              "end": {
                                "line": 8,
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
                                  183,
                                  186
                                ],
                                "loc": {
                                  "start": {
                                    "line": 8,
                                    "column": 9
                                  },
                                  "end": {
                                    "line": 8,
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
                                      187,
                                      196
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 8,
                                        "column": 13
                                      },
                                      "end": {
                                        "line": 8,
                                        "column": 22
                                      }
                                    }
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "top",
                                    "raw": "'top'",
                                    "range": [
                                      197,
                                      202
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 8,
                                        "column": 23
                                      },
                                      "end": {
                                        "line": 8,
                                        "column": 28
                                      }
                                    }
                                  },
                                  "range": [
                                    187,
                                    202
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 8,
                                      "column": 13
                                    },
                                    "end": {
                                      "line": 8,
                                      "column": 28
                                    }
                                  }
                                }
                              ],
                              "range": [
                                182,
                                203
                              ],
                              "loc": {
                                "start": {
                                  "line": 8,
                                  "column": 8
                                },
                                "end": {
                                  "line": 8,
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
                                  302,
                                  305
                                ],
                                "loc": {
                                  "start": {
                                    "line": 11,
                                    "column": 10
                                  },
                                  "end": {
                                    "line": 11,
                                    "column": 13
                                  }
                                }
                              },
                              "range": [
                                300,
                                306
                              ],
                              "loc": {
                                "start": {
                                  "line": 11,
                                  "column": 8
                                },
                                "end": {
                                  "line": 11,
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
                                  203,
                                  214
                                ],
                                "loc": {
                                  "start": {
                                    "line": 8,
                                    "column": 29
                                  },
                                  "end": {
                                    "line": 9,
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
                                      215,
                                      216
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 9,
                                        "column": 11
                                      },
                                      "end": {
                                        "line": 9,
                                        "column": 12
                                      }
                                    }
                                  },
                                  "selfClosing": false,
                                  "attributes": [],
                                  "range": [
                                    214,
                                    217
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 9,
                                      "column": 10
                                    },
                                    "end": {
                                      "line": 9,
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
                                      236,
                                      237
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 9,
                                        "column": 32
                                      },
                                      "end": {
                                        "line": 9,
                                        "column": 33
                                      }
                                    }
                                  },
                                  "range": [
                                    234,
                                    238
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 9,
                                      "column": 30
                                    },
                                    "end": {
                                      "line": 9,
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
                                            218,
                                            222
                                          ],
                                          "loc": {
                                            "start": {
                                              "line": 9,
                                              "column": 14
                                            },
                                            "end": {
                                              "line": 9,
                                              "column": 18
                                            }
                                          }
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "props",
                                          "range": [
                                            223,
                                            228
                                          ],
                                          "loc": {
                                            "start": {
                                              "line": 9,
                                              "column": 19
                                            },
                                            "end": {
                                              "line": 9,
                                              "column": 24
                                            }
                                          }
                                        },
                                        "range": [
                                          218,
                                          228
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 9,
                                            "column": 14
                                          },
                                          "end": {
                                            "line": 9,
                                            "column": 24
                                          }
                                        }
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "text",
                                        "range": [
                                          229,
                                          233
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 9,
                                            "column": 25
                                          },
                                          "end": {
                                            "line": 9,
                                            "column": 29
                                          }
                                        }
                                      },
                                      "range": [
                                        218,
                                        233
                                      ],
                                      "loc": {
                                        "start": {
                                          "line": 9,
                                          "column": 14
                                        },
                                        "end": {
                                          "line": 9,
                                          "column": 29
                                        }
                                      }
                                    },
                                    "range": [
                                      217,
                                      234
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 9,
                                        "column": 13
                                      },
                                      "end": {
                                        "line": 9,
                                        "column": 30
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  214,
                                  238
                                ],
                                "loc": {
                                  "start": {
                                    "line": 9,
                                    "column": 10
                                  },
                                  "end": {
                                    "line": 9,
                                    "column": 34
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "value": "\n          ",
                                "raw": "\n          ",
                                "range": [
                                  238,
                                  249
                                ],
                                "loc": {
                                  "start": {
                                    "line": 9,
                                    "column": 34
                                  },
                                  "end": {
                                    "line": 10,
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
                                      250,
                                      251
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 10,
                                        "column": 11
                                      },
                                      "end": {
                                        "line": 10,
                                        "column": 12
                                      }
                                    }
                                  },
                                  "selfClosing": false,
                                  "attributes": [],
                                  "range": [
                                    249,
                                    252
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 10,
                                      "column": 10
                                    },
                                    "end": {
                                      "line": 10,
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
                                      289,
                                      290
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 10,
                                        "column": 50
                                      },
                                      "end": {
                                        "line": 10,
                                        "column": 51
                                      }
                                    }
                                  },
                                  "range": [
                                    287,
                                    291
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 10,
                                      "column": 48
                                    },
                                    "end": {
                                      "line": 10,
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
                                          253,
                                          255
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 10,
                                            "column": 14
                                          },
                                          "end": {
                                            "line": 10,
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
                                            256,
                                            285
                                          ],
                                          "loc": {
                                            "start": {
                                              "line": 10,
                                              "column": 17
                                            },
                                            "end": {
                                              "line": 10,
                                              "column": 46
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        253,
                                        286
                                      ],
                                      "loc": {
                                        "start": {
                                          "line": 10,
                                          "column": 14
                                        },
                                        "end": {
                                          "line": 10,
                                          "column": 47
                                        }
                                      }
                                    },
                                    "range": [
                                      252,
                                      287
                                    ],
                                    "loc": {
                                      "start": {
                                        "line": 10,
                                        "column": 13
                                      },
                                      "end": {
                                        "line": 10,
                                        "column": 48
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  249,
                                  291
                                ],
                                "loc": {
                                  "start": {
                                    "line": 10,
                                    "column": 10
                                  },
                                  "end": {
                                    "line": 10,
                                    "column": 52
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "value": "\n        ",
                                "raw": "\n        ",
                                "range": [
                                  291,
                                  300
                                ],
                                "loc": {
                                  "start": {
                                    "line": 10,
                                    "column": 52
                                  },
                                  "end": {
                                    "line": 11,
                                    "column": 8
                                  }
                                }
                              }
                            ],
                            "range": [
                              182,
                              306
                            ],
                            "loc": {
                              "start": {
                                "line": 8,
                                "column": 8
                              },
                              "end": {
                                "line": 11,
                                "column": 14
                              }
                            }
                          },
                          {
                            "type": "Literal",
                            "value": "\n        ",
                            "raw": "\n        ",
                            "range": [
                              306,
                              315
                            ],
                            "loc": {
                              "start": {
                                "line": 11,
                                "column": 14
                              },
                              "end": {
                                "line": 12,
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
                                  316,
                                  320
                                ],
                                "loc": {
                                  "start": {
                                    "line": 12,
                                    "column": 9
                                  },
                                  "end": {
                                    "line": 12,
                                    "column": 13
                                  }
                                }
                              },
                              "selfClosing": false,
                              "attributes": [],
                              "range": [
                                315,
                                321
                              ],
                              "loc": {
                                "start": {
                                  "line": 12,
                                  "column": 8
                                },
                                "end": {
                                  "line": 12,
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
                                  405,
                                  409
                                ],
                                "loc": {
                                  "start": {
                                    "line": 14,
                                    "column": 10
                                  },
                                  "end": {
                                    "line": 14,
                                    "column": 14
                                  }
                                }
                              },
                              "range": [
                                403,
                                410
                              ],
                              "loc": {
                                "start": {
                                  "line": 14,
                                  "column": 8
                                },
                                "end": {
                                  "line": 14,
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
                                  321,
                                  332
                                ],
                                "loc": {
                                  "start": {
                                    "line": 12,
                                    "column": 14
                                  },
                                  "end": {
                                    "line": 13,
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
                                      333,
                                      338
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
                                  "selfClosing": true,
                                  "attributes": [
                                    {
                                      "type": "JSXAttribute",
                                      "name": {
                                        "type": "JSXIdentifier",
                                        "name": "type",
                                        "range": [
                                          339,
                                          343
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 13,
                                            "column": 17
                                          },
                                          "end": {
                                            "line": 13,
                                            "column": 21
                                          }
                                        }
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": "text",
                                        "raw": "'text'",
                                        "range": [
                                          344,
                                          350
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 13,
                                            "column": 22
                                          },
                                          "end": {
                                            "line": 13,
                                            "column": 28
                                          }
                                        }
                                      },
                                      "range": [
                                        339,
                                        350
                                      ],
                                      "loc": {
                                        "start": {
                                          "line": 13,
                                          "column": 17
                                        },
                                        "end": {
                                          "line": 13,
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
                                          351,
                                          362
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 13,
                                            "column": 29
                                          },
                                          "end": {
                                            "line": 13,
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
                                              364,
                                              366
                                            ],
                                            "loc": {
                                              "start": {
                                                "line": 13,
                                                "column": 42
                                              },
                                              "end": {
                                                "line": 13,
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
                                                367,
                                                390
                                              ],
                                              "loc": {
                                                "start": {
                                                  "line": 13,
                                                  "column": 45
                                                },
                                                "end": {
                                                  "line": 13,
                                                  "column": 68
                                                }
                                              }
                                            }
                                          ],
                                          "range": [
                                            364,
                                            391
                                          ],
                                          "loc": {
                                            "start": {
                                              "line": 13,
                                              "column": 42
                                            },
                                            "end": {
                                              "line": 13,
                                              "column": 69
                                            }
                                          }
                                        },
                                        "range": [
                                          363,
                                          392
                                        ],
                                        "loc": {
                                          "start": {
                                            "line": 13,
                                            "column": 41
                                          },
                                          "end": {
                                            "line": 13,
                                            "column": 70
                                          }
                                        }
                                      },
                                      "range": [
                                        351,
                                        392
                                      ],
                                      "loc": {
                                        "start": {
                                          "line": 13,
                                          "column": 29
                                        },
                                        "end": {
                                          "line": 13,
                                          "column": 70
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    332,
                                    394
                                  ],
                                  "loc": {
                                    "start": {
                                      "line": 13,
                                      "column": 10
                                    },
                                    "end": {
                                      "line": 13,
                                      "column": 72
                                    }
                                  }
                                },
                                "closingElement": null,
                                "children": [],
                                "range": [
                                  332,
                                  394
                                ],
                                "loc": {
                                  "start": {
                                    "line": 13,
                                    "column": 10
                                  },
                                  "end": {
                                    "line": 13,
                                    "column": 72
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "value": "\n        ",
                                "raw": "\n        ",
                                "range": [
                                  394,
                                  403
                                ],
                                "loc": {
                                  "start": {
                                    "line": 13,
                                    "column": 72
                                  },
                                  "end": {
                                    "line": 14,
                                    "column": 8
                                  }
                                }
                              }
                            ],
                            "range": [
                              315,
                              410
                            ],
                            "loc": {
                              "start": {
                                "line": 12,
                                "column": 8
                              },
                              "end": {
                                "line": 14,
                                "column": 15
                              }
                            }
                          },
                          {
                            "type": "Literal",
                            "value": "\n      ",
                            "raw": "\n      ",
                            "range": [
                              410,
                              417
                            ],
                            "loc": {
                              "start": {
                                "line": 14,
                                "column": 15
                              },
                              "end": {
                                "line": 15,
                                "column": 6
                              }
                            }
                          }
                        ],
                        "range": [
                          146,
                          423
                        ],
                        "loc": {
                          "start": {
                            "line": 7,
                            "column": 6
                          },
                          "end": {
                            "line": 15,
                            "column": 12
                          }
                        }
                      },
                      "range": [
                        131,
                        429
                      ],
                      "loc": {
                        "start": {
                          "line": 6,
                          "column": 4
                        },
                        "end": {
                          "line": 16,
                          "column": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    125,
                    433
                  ],
                  "loc": {
                    "start": {
                      "line": 5,
                      "column": 10
                    },
                    "end": {
                      "line": 17,
                      "column": 3
                    }
                  }
                },
                "rest": null,
                "generator": false,
                "expression": false,
                "range": [
                  125,
                  433
                ],
                "loc": {
                  "start": {
                    "line": 5,
                    "column": 10
                  },
                  "end": {
                    "line": 17,
                    "column": 3
                  }
                }
              },
              "kind": "",
              "static": false,
              "computed": false,
              "range": [
                117,
                433
              ],
              "loc": {
                "start": {
                  "line": 5,
                  "column": 2
                },
                "end": {
                  "line": 17,
                  "column": 3
                }
              }
            }
          ],
          "range": [
            113,
            435
          ],
          "loc": {
            "start": {
              "line": 4,
              "column": 47
            },
            "end": {
              "line": 18,
              "column": 1
            }
          }
        },
        "range": [
          81,
          435
        ],
        "loc": {
          "start": {
            "line": 4,
            "column": 15
          },
          "end": {
            "line": 18,
            "column": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "Identifier",
          "name": "Example",
          "range": [
            87,
            94
          ],
          "loc": {
            "start": {
              "line": 4,
              "column": 21
            },
            "end": {
              "line": 4,
              "column": 28
            }
          }
        }
      ],
      "source": null,
      "exportKind": "value",
      "range": [
        66,
        435
      ],
      "loc": {
        "start": {
          "line": 4,
          "column": 0
        },
        "end": {
          "line": 18,
          "column": 1
        }
      }
    }
  ],
  "range": [
    0,
    435
  ],
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 18,
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
      "index": 64,
      "lineNumber": 2,
      "column": 25,
      "description": "Illegal export declaration"
    }
  ]
}