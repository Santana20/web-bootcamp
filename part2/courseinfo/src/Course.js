const Header = ({ course }) => <h2>{course.name}</h2>;

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part, key) => {
        return <Part key={key} part={part} />;
      })}
    </>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((prev, cur) => cur.exercises + prev, 0);
  return <b>Total of {total} exercises</b>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
