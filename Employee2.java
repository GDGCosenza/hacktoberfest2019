package esrcitazione3;

import java.util.HashSet;
import java.util.Set;

public class Employee2 implements Comparable<Employee2>{
	private int id;
	private String name;
	private String surname;
	private String department;
	private int salary;
	private Set<String> skills;

	public Employee2(int id, String name, String surname, String department, int salary, Set<String> skills){
		this.id=id;
		this.name = name;
		this.surname = surname;
		this.department = department;
		this.salary = salary;
		this.skills = skills;
	}
	public int getSalary(){return salary;}
	public String getDepartment(){return department;}
	public String getName(){return name;}


	public int getId() {
		return id;
	}
	public String getSurname() {
		return surname;
	}
	public Set<String> getSkills() {
		return skills;
	}

	public boolean equals(Object arg0) {
		if(arg0 instanceof Employee2)
			return ((Employee2)arg0).getId()==this.getId();
		return false;
	}
	public String toString() {
		return id+","+name+","+surname+","+ department+","+salary+","+skills.toString();
	}

	public int compareTo(Employee2 o) {
		return this.id-o.getId();
	}

}
