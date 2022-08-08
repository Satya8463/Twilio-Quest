function construct(name)
{
    let person = {name,
    material : 'human',assemble: true,duration:1000};
    return person;
}
const someperson =construct('hello');
console.log(someperson.name);
console.log(someperson.material);
console.log(someperson.assemble);
console.log(someperson.duration);