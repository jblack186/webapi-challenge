const express = require('express');

const db = require('./data/helpers/projectModel');

const router = express.Router();

router.use((req, res, next) => {
    console.log('We are in the hubs router!');
    next();
  });

router.get('/', (req, res) => {
    db.get()
        .then(projects => {
            console.log(projects);
            res.status(200).json(projects);
        } )
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: 'error'
            })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.get(id)
    .then(action => {
        console.log(action);
        res.status(200).json({
            message: 'here you go',
            action
        })

    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'nope'
        })
    })
  });

  router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the action',
      });
    });
  });

router.post('/', (req, res) => {
    db.insert(req.body)
    .then(project => {
        console.log(project);
        res.status(201).json({
            message: 'project created'
        })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            err: 'error'
        })
    })
})


router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    .then(action => {
        console.log(action)
      res.status(200).json({ message: 'The action has been destroyed' });
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error removing the action',
      });
    });
  });



module.exports = router;

