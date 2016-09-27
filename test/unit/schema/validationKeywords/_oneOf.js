export const oneOfTests = [
  {
    'description': 'oneOf',
    'schema': {
      'oneOf': [
        {
          'type': 'integer'
        },
        {
          'type': 'number',
          'minimum': 2
        }
      ]
    },
    'tests': [
      {
        'description': 'first oneOf valid',
        'data': 1,
        'valid': true
      },
      {
        'description': 'second oneOf valid',
        'data': 2.5,
        'valid': true
      },
      {
        'description': 'both oneOf valid',
        'data': 3,
        'valid': false
      },
      {
        'description': 'neither oneOf valid',
        'data': 1.5,
        'valid': false
      }
    ]
  },
  {
    'description': 'oneOf with base schema',
    'schema': {
      'type': 'string',
      'oneOf': [
        {
          'type': 'string',
          'minLength': 2
        },
        {
          'type': 'string',
          'maxLength': 4
        }
      ]
    },
    'tests': [
      {
        'description': 'mismatch base schema',
        'data': 3,
        'valid': false
      },
      {
        'description': 'one oneOf valid',
        'data': 'foobar',
        'valid': true
      },
      {
        'description': 'both oneOf valid',
        'data': 'foo',
        'valid': false
      }
    ]
  }
]
