/**
 * Developer Entity
 * Represents a developer with first and last name.
 */
export class Developer {
    #firstName;
    #lastName;


    /**
     * Creates a new Developer instance.
     * @param  {string} firstName the first name of the developer
     * @param  {string} lastName the last name of the developer
     */
    constructor(firstName, lastName) {
        this.#firstName = firstName?.trim() || '';
        this.#lastName = lastName?.trim() || '';
    }

    /**
     * Gets the first name of the developer.
     * @returns {string} The first name of the developer.
     */
    get firstName() {
        return this.#firstName;
    }

    /**
     * Gets the last name of the developer.
     * @returns {string} The last name of the developer.
     */
    get lastName() {
        return this.#lastName;
    }

    /**
     * Gets the full name of the developer.
     * @returns {string} The full name of the developer, or "Unknown Developer" if either name is missing.
     */
    get fullName() {
        return this.#firstName && this.#lastName
        ? `${this.#firstName} ${this.#lastName}`
            : "Unknown Developer";
    }
}