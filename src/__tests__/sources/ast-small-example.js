module.exports = {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "add",
            "range": [
              4,
              7
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 7
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "a",
                "range": [
                  19,
                  20
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 19
                  },
                  "end": {
                    "line": 1,
                    "column": 20
                  }
                }
              },
              {
                "type": "Identifier",
                "name": "b",
                "range": [
                  21,
                  22
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 21
                  },
                  "end": {
                    "line": 1,
                    "column": 22
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
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "name": "a",
                      "range": [
                        34,
                        35
                      ],
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 9
                        },
                        "end": {
                          "line": 2,
                          "column": 10
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "b",
                      "range": [
                        36,
                        37
                      ],
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 11
                        },
                        "end": {
                          "line": 2,
                          "column": 12
                        }
                      }
                    },
                    "range": [
                      34,
                      37
                    ],
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 9
                      },
                      "end": {
                        "line": 2,
                        "column": 12
                      }
                    }
                  },
                  "range": [
                    27,
                    38
                  ],
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 2
                    },
                    "end": {
                      "line": 2,
                      "column": 13
                    }
                  }
                }
              ],
              "range": [
                23,
                40
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 23
                },
                "end": {
                  "line": 3,
                  "column": 1
                }
              }
            },
            "rest": null,
            "generator": false,
            "expression": false,
            "range": [
              10,
              40
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 10
              },
              "end": {
                "line": 3,
                "column": 1
              }
            }
          },
          "range": [
            4,
            40
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 3,
              "column": 1
            }
          }
        }
      ],
      "kind": "var",
      "range": [
        0,
        40
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 3,
          "column": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "add",
          "range": [
            42,
            45
          ],
          "loc": {
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 3
            }
          }
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "range": [
              46,
              47
            ],
            "loc": {
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 5
              }
            }
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "range": [
              48,
              49
            ],
            "loc": {
              "start": {
                "line": 5,
                "column": 6
              },
              "end": {
                "line": 5,
                "column": 7
              }
            }
          }
        ],
        "range": [
          42,
          50
        ],
        "loc": {
          "start": {
            "line": 5,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 8
          }
        }
      },
      "range": [
        42,
        51
      ],
      "loc": {
        "start": {
          "line": 5,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 9
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
            "name": "b",
            "range": [
              57,
              58
            ],
            "loc": {
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 5
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "add",
              "range": [
                61,
                64
              ],
              "loc": {
                "start": {
                  "line": 7,
                  "column": 8
                },
                "end": {
                  "line": 7,
                  "column": 11
                }
              }
            },
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "add",
                  "range": [
                    65,
                    68
                  ],
                  "loc": {
                    "start": {
                      "line": 7,
                      "column": 12
                    },
                    "end": {
                      "line": 7,
                      "column": 15
                    }
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "range": [
                      69,
                      70
                    ],
                    "loc": {
                      "start": {
                        "line": 7,
                        "column": 16
                      },
                      "end": {
                        "line": 7,
                        "column": 17
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "range": [
                      71,
                      72
                    ],
                    "loc": {
                      "start": {
                        "line": 7,
                        "column": 18
                      },
                      "end": {
                        "line": 7,
                        "column": 19
                      }
                    }
                  }
                ],
                "range": [
                  65,
                  73
                ],
                "loc": {
                  "start": {
                    "line": 7,
                    "column": 12
                  },
                  "end": {
                    "line": 7,
                    "column": 20
                  }
                }
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "range": [
                  75,
                  76
                ],
                "loc": {
                  "start": {
                    "line": 7,
                    "column": 22
                  },
                  "end": {
                    "line": 7,
                    "column": 23
                  }
                }
              }
            ],
            "range": [
              61,
              77
            ],
            "loc": {
              "start": {
                "line": 7,
                "column": 8
              },
              "end": {
                "line": 7,
                "column": 24
              }
            }
          },
          "range": [
            57,
            77
          ],
          "loc": {
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 24
            }
          }
        }
      ],
      "kind": "var",
      "range": [
        53,
        78
      ],
      "loc": {
        "start": {
          "line": 7,
          "column": 0
        },
        "end": {
          "line": 7,
          "column": 25
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
              84,
              88
            ],
            "loc": {
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 8
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
                  "name": "hello",
                  "range": [
                    95,
                    100
                  ],
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 2
                    },
                    "end": {
                      "line": 10,
                      "column": 7
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
                          "type": "Literal",
                          "value": "hello",
                          "raw": "'hello'",
                          "range": [
                            120,
                            127
                          ],
                          "loc": {
                            "start": {
                              "line": 10,
                              "column": 27
                            },
                            "end": {
                              "line": 10,
                              "column": 34
                            }
                          }
                        },
                        "range": [
                          113,
                          127
                        ],
                        "loc": {
                          "start": {
                            "line": 10,
                            "column": 20
                          },
                          "end": {
                            "line": 10,
                            "column": 34
                          }
                        }
                      }
                    ],
                    "range": [
                      112,
                      128
                    ],
                    "loc": {
                      "start": {
                        "line": 10,
                        "column": 19
                      },
                      "end": {
                        "line": 10,
                        "column": 35
                      }
                    }
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false,
                  "range": [
                    102,
                    128
                  ],
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 9
                    },
                    "end": {
                      "line": 10,
                      "column": 35
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "shorthand": false,
                "computed": false,
                "range": [
                  95,
                  128
                ],
                "loc": {
                  "start": {
                    "line": 10,
                    "column": 2
                  },
                  "end": {
                    "line": 10,
                    "column": 35
                  }
                }
              },
              {
                "type": "Property",
                "key": {
                  "type": "Identifier",
                  "name": "say",
                  "range": [
                    132,
                    135
                  ],
                  "loc": {
                    "start": {
                      "line": 11,
                      "column": 2
                    },
                    "end": {
                      "line": 11,
                      "column": 5
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
                        146,
                        152
                      ],
                      "loc": {
                        "start": {
                          "line": 11,
                          "column": 16
                        },
                        "end": {
                          "line": 11,
                          "column": 22
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
                            161,
                            167
                          ],
                          "loc": {
                            "start": {
                              "line": 11,
                              "column": 31
                            },
                            "end": {
                              "line": 11,
                              "column": 37
                            }
                          }
                        },
                        "range": [
                          154,
                          167
                        ],
                        "loc": {
                          "start": {
                            "line": 11,
                            "column": 24
                          },
                          "end": {
                            "line": 11,
                            "column": 37
                          }
                        }
                      }
                    ],
                    "range": [
                      153,
                      168
                    ],
                    "loc": {
                      "start": {
                        "line": 11,
                        "column": 23
                      },
                      "end": {
                        "line": 11,
                        "column": 38
                      }
                    }
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false,
                  "range": [
                    137,
                    168
                  ],
                  "loc": {
                    "start": {
                      "line": 11,
                      "column": 7
                    },
                    "end": {
                      "line": 11,
                      "column": 38
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "shorthand": false,
                "computed": false,
                "range": [
                  132,
                  168
                ],
                "loc": {
                  "start": {
                    "line": 11,
                    "column": 2
                  },
                  "end": {
                    "line": 11,
                    "column": 38
                  }
                }
              }
            ],
            "range": [
              91,
              170
            ],
            "loc": {
              "start": {
                "line": 9,
                "column": 11
              },
              "end": {
                "line": 12,
                "column": 1
              }
            }
          },
          "range": [
            84,
            170
          ],
          "loc": {
            "start": {
              "line": 9,
              "column": 4
            },
            "end": {
              "line": 12,
              "column": 1
            }
          }
        }
      ],
      "kind": "var",
      "range": [
        80,
        170
      ],
      "loc": {
        "start": {
          "line": 9,
          "column": 0
        },
        "end": {
          "line": 12,
          "column": 1
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
              172,
              176
            ],
            "loc": {
              "start": {
                "line": 14,
                "column": 0
              },
              "end": {
                "line": 14,
                "column": 4
              }
            }
          },
          "property": {
            "type": "Identifier",
            "name": "hello",
            "range": [
              177,
              182
            ],
            "loc": {
              "start": {
                "line": 14,
                "column": 5
              },
              "end": {
                "line": 14,
                "column": 10
              }
            }
          },
          "range": [
            172,
            182
          ],
          "loc": {
            "start": {
              "line": 14,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 10
            }
          }
        },
        "arguments": [],
        "range": [
          172,
          184
        ],
        "loc": {
          "start": {
            "line": 14,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 12
          }
        }
      },
      "range": [
        172,
        185
      ],
      "loc": {
        "start": {
          "line": 14,
          "column": 0
        },
        "end": {
          "line": 14,
          "column": 13
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
              186,
              190
            ],
            "loc": {
              "start": {
                "line": 15,
                "column": 0
              },
              "end": {
                "line": 15,
                "column": 4
              }
            }
          },
          "property": {
            "type": "Identifier",
            "name": "say",
            "range": [
              191,
              194
            ],
            "loc": {
              "start": {
                "line": 15,
                "column": 5
              },
              "end": {
                "line": 15,
                "column": 8
              }
            }
          },
          "range": [
            186,
            194
          ],
          "loc": {
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 8
            }
          }
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "'hello'",
            "range": [
              195,
              202
            ],
            "loc": {
              "start": {
                "line": 15,
                "column": 9
              },
              "end": {
                "line": 15,
                "column": 16
              }
            }
          }
        ],
        "range": [
          186,
          203
        ],
        "loc": {
          "start": {
            "line": 15,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 17
          }
        }
      },
      "range": [
        186,
        204
      ],
      "loc": {
        "start": {
          "line": 15,
          "column": 0
        },
        "end": {
          "line": 15,
          "column": 18
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "Great",
        "range": [
          215,
          220
        ],
        "loc": {
          "start": {
            "line": 17,
            "column": 9
          },
          "end": {
            "line": 17,
            "column": 14
          }
        }
      },
      "params": [],
      "defaults": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    226,
                    230
                  ],
                  "loc": {
                    "start": {
                      "line": 18,
                      "column": 2
                    },
                    "end": {
                      "line": 18,
                      "column": 6
                    }
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "scott",
                  "range": [
                    231,
                    236
                  ],
                  "loc": {
                    "start": {
                      "line": 18,
                      "column": 7
                    },
                    "end": {
                      "line": 18,
                      "column": 12
                    }
                  }
                },
                "range": [
                  226,
                  236
                ],
                "loc": {
                  "start": {
                    "line": 18,
                    "column": 2
                  },
                  "end": {
                    "line": 18,
                    "column": 12
                  }
                }
              },
              "right": {
                "type": "Literal",
                "value": "SCOTT",
                "raw": "'SCOTT'",
                "range": [
                  239,
                  246
                ],
                "loc": {
                  "start": {
                    "line": 18,
                    "column": 15
                  },
                  "end": {
                    "line": 18,
                    "column": 22
                  }
                }
              },
              "range": [
                226,
                246
              ],
              "loc": {
                "start": {
                  "line": 18,
                  "column": 2
                },
                "end": {
                  "line": 18,
                  "column": 22
                }
              }
            },
            "range": [
              226,
              246
            ],
            "loc": {
              "start": {
                "line": 18,
                "column": 2
              },
              "end": {
                "line": 18,
                "column": 22
              }
            }
          }
        ],
        "range": [
          222,
          248
        ],
        "loc": {
          "start": {
            "line": 17,
            "column": 16
          },
          "end": {
            "line": 19,
            "column": 1
          }
        }
      },
      "rest": null,
      "generator": false,
      "expression": false,
      "range": [
        206,
        248
      ],
      "loc": {
        "start": {
          "line": 17,
          "column": 0
        },
        "end": {
          "line": 19,
          "column": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "Great",
              "range": [
                250,
                255
              ],
              "loc": {
                "start": {
                  "line": 21,
                  "column": 0
                },
                "end": {
                  "line": 21,
                  "column": 5
                }
              }
            },
            "property": {
              "type": "Identifier",
              "name": "prototype",
              "range": [
                256,
                265
              ],
              "loc": {
                "start": {
                  "line": 21,
                  "column": 6
                },
                "end": {
                  "line": 21,
                  "column": 15
                }
              }
            },
            "range": [
              250,
              265
            ],
            "loc": {
              "start": {
                "line": 21,
                "column": 0
              },
              "end": {
                "line": 21,
                "column": 15
              }
            }
          },
          "property": {
            "type": "Identifier",
            "name": "jubilee",
            "range": [
              266,
              273
            ],
            "loc": {
              "start": {
                "line": 21,
                "column": 16
              },
              "end": {
                "line": 21,
                "column": 23
              }
            }
          },
          "range": [
            250,
            273
          ],
          "loc": {
            "start": {
              "line": 21,
              "column": 0
            },
            "end": {
              "line": 21,
              "column": 23
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "name": "a",
              "range": [
                285,
                286
              ],
              "loc": {
                "start": {
                  "line": 21,
                  "column": 35
                },
                "end": {
                  "line": 21,
                  "column": 36
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
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "name": "a",
                    "range": [
                      298,
                      299
                    ],
                    "loc": {
                      "start": {
                        "line": 22,
                        "column": 9
                      },
                      "end": {
                        "line": 22,
                        "column": 10
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": "!!!!!!",
                    "raw": "'!!!!!!'",
                    "range": [
                      302,
                      310
                    ],
                    "loc": {
                      "start": {
                        "line": 22,
                        "column": 13
                      },
                      "end": {
                        "line": 22,
                        "column": 21
                      }
                    }
                  },
                  "range": [
                    298,
                    310
                  ],
                  "loc": {
                    "start": {
                      "line": 22,
                      "column": 9
                    },
                    "end": {
                      "line": 22,
                      "column": 21
                    }
                  }
                },
                "range": [
                  291,
                  310
                ],
                "loc": {
                  "start": {
                    "line": 22,
                    "column": 2
                  },
                  "end": {
                    "line": 22,
                    "column": 21
                  }
                }
              }
            ],
            "range": [
              287,
              312
            ],
            "loc": {
              "start": {
                "line": 21,
                "column": 37
              },
              "end": {
                "line": 23,
                "column": 1
              }
            }
          },
          "rest": null,
          "generator": false,
          "expression": false,
          "range": [
            276,
            312
          ],
          "loc": {
            "start": {
              "line": 21,
              "column": 26
            },
            "end": {
              "line": 23,
              "column": 1
            }
          }
        },
        "range": [
          250,
          312
        ],
        "loc": {
          "start": {
            "line": 21,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 1
          }
        }
      },
      "range": [
        250,
        312
      ],
      "loc": {
        "start": {
          "line": 21,
          "column": 0
        },
        "end": {
          "line": 23,
          "column": 1
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
            "name": "Great",
            "range": [
              314,
              319
            ],
            "loc": {
              "start": {
                "line": 25,
                "column": 0
              },
              "end": {
                "line": 25,
                "column": 5
              }
            }
          },
          "property": {
            "type": "Identifier",
            "name": "jubilee",
            "range": [
              320,
              327
            ],
            "loc": {
              "start": {
                "line": 25,
                "column": 6
              },
              "end": {
                "line": 25,
                "column": 13
              }
            }
          },
          "range": [
            314,
            327
          ],
          "loc": {
            "start": {
              "line": 25,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 13
            }
          }
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "'hello'",
            "range": [
              328,
              335
            ],
            "loc": {
              "start": {
                "line": 25,
                "column": 14
              },
              "end": {
                "line": 25,
                "column": 21
              }
            }
          }
        ],
        "range": [
          314,
          336
        ],
        "loc": {
          "start": {
            "line": 25,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 22
          }
        }
      },
      "range": [
        314,
        337
      ],
      "loc": {
        "start": {
          "line": 25,
          "column": 0
        },
        "end": {
          "line": 25,
          "column": 23
        }
      }
    }
  ],
  "range": [
    0,
    337
  ],
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 25,
      "column": 23
    }
  },
  "errors": []
}