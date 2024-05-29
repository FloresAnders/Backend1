const { Router } = require("express");
const exerciseRouter = Router();

const { getAllExercises, createExercise, updateExercise, getExerciseById, deleteExercise } = require("../queries/grammarExercise");

exerciseRouter.get("/", async (_, res) => {
    try {
        const exercises = await getAllExercises({});
        res.status(200).json({ exercises });
    } catch (error) {
        console.error("exerciseRouter GET error: ", error);
        res.status(500).json({ error: "Error al obtener los ejercicios de gramatica" });
    }
});

exerciseRouter.post("/", async (req, res) => {
    try {
        const exerciseData = req.body; // Suponiendo que los datos del ejercicio están en el cuerpo de la solicitud
        const newExercise = await createExercise(exerciseData);
        res.status(201).json({ exercise: newExercise });
    } catch (error) {
        console.error("exerciseRouter POST error: ", error);
        res.status(500).json({ error: "Error al crear un nuevo ejercicio" });
    }
});

// Actualizar un ejercicio por ID
exerciseRouter.put("/:id", async (req, res) => {
    try {
        const exerciseId = req.params.id;
        const updatedExerciseData = req.body;
        const updatedExercise = await updateExercise(exerciseId, updatedExerciseData);
        res.status(200).json({ exercise: updatedExercise });
    } catch (error) {
        console.error("exerciseRouter PUT error: ", error);
        res.status(500).json({ error: "Error al actualizar el ejercicio" });
    }
});

// Obtener un ejercicio por ID
exerciseRouter.get("/:id", async (req, res) => {
    try {
        const exerciseId = req.params.id;
        console.log('Requested exercise ID:', exerciseId);
        const exercise = await getExerciseById(exerciseId);
        res.status(200).json({ exercise });
    } catch (error) {
        console.error("exerciseRouter GET by ID error: ", error);
        res.status(500).json({ error: `Error al obtener el ejercicio por ID: ${req, res} ` });
    }
});


// Eliminar un ejercicio por ID
exerciseRouter.delete("/:id", async (req, res) => {
    try {
        const exerciseId = req.params.id;
        await deleteExercise(exerciseId);
        res.status(204).send();
    } catch (error) {
        console.error("exerciseRouter DELETE error: ", error);
        res.status(500).json({ error: "Error al eliminar el ejercicio" });
    }
});

module.exports = exerciseRouter;
